import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs'; // Add import

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add tests for all() method
  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];
      let response;
      spyOn(service, 'all').and.returnValue(of(userResponse));

      service.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };
      let response;
      spyOn(service, 'findOne').and.returnValue(of(userResponse));
  
      service.findOne('2').subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });

  describe('sum', ()=>{
    it('should sum two numbers', ()=>{
      const myResult = 5;
      let response;
      //spyOn(service, 'sum').and.returnValue(of(myResult));

      service.sum(1,3).subscribe(res =>{
        response = res;
      });

      console.log(response);
      //console.log(myResult);
      expect(response).toEqual(4);

    });
  });
  
});