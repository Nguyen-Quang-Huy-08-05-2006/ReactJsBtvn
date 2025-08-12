class Account{
    id:string
    userName:string
    password:string
    isLogIn:boolean
    role:string
    constructor(id:string,userName:string,password:string,isLogIn:boolean,role:string,){
        this.id = id
        this.userName = userName
        this.password = password
        this.isLogIn = isLogIn
        this.role = role
    }
    logOut():void{
        if(this.isLogIn){
            console.log(`Dang xuat thanh cong`);
            this.isLogIn = false
        }else{}
    }
}

enum USerStatus{
    Active ="Active",
    Banned = "Banned"
}

class UserAcc extends Account{
    status:USerStatus
     constructor(id:string,userName:string,password:string,isLogIn:boolean,role:string,status:USerStatus){
        super(id, userName,password,isLogIn,role)
        this.status = status
    }
    logIn():void{
        if(this.status === USerStatus.Active){
            this.isLogIn = true
            console.log("Dang nhap thanh cong");
        }else{
            console.log("Tai khoan da bi khoa");
        }
    }
    ban():void{
        this.status = USerStatus.Banned
        console.log(`Da ban user`);
    }
    getId():string{
        return this.id
    }
}

class AdminAcc extends Account{
    constructor(id:string,userName:string,password:string,isLogIn:boolean,role:string){
        super(id, userName,password,isLogIn,role)
    }
    banUser(id:string,users:UserAcc[]):void{
        const user = users.find(u=>u.getId()===id)
        if(user){
            user.ban()
        }else{
            console.log(`Khong thay user co id: ${id}`);        
        }
    }
}

const users:UserAcc[] = [
    new UserAcc("03","Nguyen Van A","1234567890",true,"User",USerStatus.Active),
    new UserAcc("04","Nguyen Van A","1234567890",true,"User",USerStatus.Banned),
    
]  

const admin1 = new AdminAcc("00","Nguyen Quang Huy","******",true,"admin")
admin1.banUser("03",users)