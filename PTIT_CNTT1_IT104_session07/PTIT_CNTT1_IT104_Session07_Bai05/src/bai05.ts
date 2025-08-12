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
}

const account1 = new Account("01","Nguyen Van A","1234567890",true,"User")
account1.logOut()
const account2 = new Account("02","Nguyen Van B","1234567890",false,"User")
account2.logOut()

const account3 = new UserAcc("01","Nguyen Van A","1234567890",true,"User",USerStatus.Active)
account3.logIn()
const account4 = new UserAcc("01","Nguyen Van A","1234567890",true,"User",USerStatus.Banned)
account4.logIn()