import { Pipe, PipeTransform } from '@angular/core';
import { Cookie } from '../models/cookie';

@Pipe({
  name: 'cookieTexture'
})
export class CookieTexturePipe implements PipeTransform {

  transform(cookies: Cookie[], texture: string): Cookie[] {
    const results = [];

    if (texture === 'all') {
      return cookies;
    }

    // for (let i = 0; i < cookies.length; i++) {
    //   for(let j = 0; j < cookies[i].texture.length; j++) {
    //     if (cookies[i].texture[j]. === texture) {
    //       results.push(cookies[i]);
    //     }
    //   }
    // }
    return results;
  }

}
