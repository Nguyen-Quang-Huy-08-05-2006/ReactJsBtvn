class Staff {
    public fullName: string;
    protected organization: string;
    private contactNumber: string;

    constructor(fullName: string, organization: string, contactNumber: string) {
        this.fullName = fullName;
        this.organization = organization;
        this.contactNumber = contactNumber;
    }

    public showDetails(): void {
        console.log(`Họ và tên: ${this.fullName}`);
        console.log(`Đơn vị: ${this.organization}`);
        console.log(`Liên hệ: ${this.contactNumber}`);
    }
}

const staffMember = new Staff("Quang Duy Manh", "fpt", "0365303096");

staffMember.showDetails();