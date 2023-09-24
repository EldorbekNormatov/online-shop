import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateSellerDto } from './dto/create-seller.dto';
import { UsersService } from 'src/users/users.service';
import { MailService } from 'src/mail/mail.service';
import {JwtService} from '@nestjs/jwt'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager';
import { verifyDto } from 'src/auth/dto/verify-auth.dto';
import { loginDto } from './dto/login-seller.dto';


@Injectable()
 export class SellerService {
  @Inject() private readonly usersService: UsersService;
  @Inject() private readonly mail: MailService;
  @Inject() private readonly jwtService: JwtService;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}


  async register(  {name, surname, password, number, email, legalName}: CreateSellerDto) {
    try {
      const user = await this.usersService.findByLeagalName(legalName)
      if(user) throw new ForbiddenException('this number is registerd')
  
      const hashedPass = await bcrypt.hash(password, 12)
  
      const otp = Math.floor(100000  + Math.random() * 900000)           
  
      this.cacheManager.set(
        email,
         JSON.stringify({otp: otp, name: name, surname: surname,  password: hashedPass, number: number,legalName: legalName,  count: 2 }),
         )   
  
         const html = `<b>Code: ${otp}</b>`;
         this.mail.sendMail(email, html )
        
         return { message: 'ok' }       
    } catch (error) {
      console.log(error);
      
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
  
       const newUser = await this.usersService.createSeller({name: res.name, surname: res.surname, password: res.password, number: res.number, email, legalName: res.legalName })
       
       const token = await this.jwtService.signAsync({id: newUser.user.id }) 
    
     await this.cacheManager.del(email)
  
     return { data: token, message: 'Success' }       
    } catch (error) {
      console.log(error);
      
    }
  }

  async login({email, password}: loginDto) {
    try {
      const user = await  this.usersService.sellerfindByEmail(email)

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
