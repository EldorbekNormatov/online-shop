import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateAuthDto } from './dto/create-auth.dto';
import { loginDto } from './dto/login-auth.dto';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt'
 import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager';
import { MailService } from 'src/mail/mail.service';
import { verifyDto } from './dto/verify-auth.dto';

@Injectable()
export class AuthService {
  @Inject() private readonly jwtService: JwtService;
  @Inject() private readonly usereService: UsersService;
  @Inject() private readonly mail: MailService
constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {} 

 async register(  {name, surname, password, number, email, gender}: CreateAuthDto) {
      try {
        const user = await this.usereService.findByNumber(number)
        if(user) throw new ForbiddenException('this number is registerd')
  
      const hashedPass = await bcrypt.hash(password, 12)
  
      const otp = Math.floor(100000  + Math.random() * 900000)
      console.log(otp);
      
           
  
      this.cacheManager.set(
        email,
         JSON.stringify({otp: otp, name: name, surname: surname,  password: hashedPass, number: number,gender: gender,  count: 2 }),
         )   
      
    const html = `<b>Code: ${otp}</b>`;
    this.mail.sendMail(email, html )
   
    return { message: 'ok' }        
      } catch (error) {
        
        
      }
  }

 async verify({email, otp} : verifyDto) {
    try {
      const cache: any = await this.cacheManager.get(email)

      if(!cache) throw new ForbiddenException('invalid Code')
  
      const res = JSON.parse(cache)        
      if(res.count == 0) throw new ForbiddenException('invalid Code')
  
      if(res.otp != otp) {
        await this.cacheManager.set(
           email,
           JSON.stringify({  count: res.count - 1 }),
         )      
          
         throw new ForbiddenException('ivalid Code')
       }
  
       if(res.count <= 0) {
        throw new ForbiddenException('Too many attempts')
       }
  
       const newUser = await this.usereService.create({name: res.name, surname: res.surname, password: res.password, number: res.number, email, gender: res.gender })
       
       const token = await this.jwtService.signAsync({id: newUser.user.id }) 
    
     await this.cacheManager.del(email)
  
     return { data: token, message: 'Success' }      
    } catch (error) {
      console.log(error);
    }
  }

  async login({email, password}: loginDto) {
    try {
      const user = await  this.usereService.findByEmail(email)

      if(!user) throw new ForbiddenException('email or password is not avaiable')
  
      const checkPass = await bcrypt.compare(password, user.password )
  
      if(!checkPass) throw new ForbiddenException('email or password is not avaiable')
  
      const token = await this.jwtService.signAsync({id: user.id }) 
  
      return { data:token,  message: 'Success' }          
    } catch (error) {
      console.log(error);
      
    }
  }  
}
