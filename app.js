// 1 - masala
{ 
    class Student {
        constructor(lname, fname, tel, adress){
            this.lname = lname
            this.fname = fname
            this.tel = tel
            this.adress = adress
        }
    
        getFullName() {
            return `${this.lname} ${this.fname}`
        }
        info() {
            return `Ismi va familyasi: ${this.lname} ${this.fname}, telefon raqami: ${this.tel}, manzili: ${this.adress}`
        }
    }

    let me = new Student ("Jo'rayev", 'Javohir', 998335568060, 'Chilonzor')
    console.log(me.getFullName());
    console.log(me.info());
}

// 2 - masala
{
    class Teacher {
        constructor(lname, fname, adress, salary, level){
            this.lname = lname
            this.fname = fname
            this.adress = adress
            this.salary = salary
            this.level = level
        }

        getFullName() {
            return `${this.lname} ${this.fname}`
        }
        descrtiption() {
            return `Ism va familiya: ${this.lname} ${this.fname}, manzil: ${this.adress}, maosh: ${this.salary}, level: ${this.level}`
        }
    }

    let teacher = new Teacher ("Rosulov", "Boburmirzo", "Chilonzor", 12_000_000, "Senior")
    console.log(teacher.getFullName());
    console.log(teacher.descrtiption());
}

// 3 - masala 
{
    class Group{
        constructor(name, room, level, studentCounts, teacher){
            this.name = name
            this.room = room
            this.level = level
            this.studentCounts = studentCounts
            this.teacher = teacher
        }

        fullInformation() {
            return `Guruh nomi: ${this.name}, xona: ${this.room}, level: ${this.level}, o'qiyotganlar soni: ${this.studentCounts}, Guruh ustozi: ${this.teacher}`
        }
    }

    let group = new Group ("N83", "Slace", "beginner", 16, 'Boburmirzo')
    console.log(group.fullInformation());
}

// 4 - masala 
{
    class Payment{
        constructor(from, to, amount, date, status){
            this.from = from
            this.to = to
            this.amount = amount
            this.date = date
            this.status = status
        }

        getStatus() {
            return `From: ${this.from}, to: ${this.to}, amount: ${this.amount}, date: ${this.date}, status: ${this.status}`
        }
    }

        let hozirgi = new Date()
        let kun = hozirgi.getDate()
        let oy = hozirgi.getMonth() + 1
        let yil = hozirgi.getFullYear()

        let kunOyYil = `${kun}.${oy}.${yil}` 

    let payment = new Payment("John", 'Javohir', 200_000, kunOyYil, true)
    console.log(payment.getStatus());
}

// 5 - masala
{
    class Salary{
        constructor(to, amount, type, date, status){
            this.to = to
            this.amount = amount
            this.type = type
            this.date = date
            this.status = status
        }
        
        getInfo() {
            return `to: ${this.to}, amount: ${this.amount}, type: ${this.type}, date: ${this.date}, status: ${this.status}`
        }
    }

        let hozirgi = new Date()
        let kun = hozirgi.getDate()
        let oy = hozirgi.getMonth() + 1
        let yil = hozirgi.getFullYear()

        let kunOyYil = `${kun}.${oy}.${yil}` 

    let salary = new Salary('Mike', 150, 'USD', kunOyYil, false)
    console.log(salary.getInfo());
}

// 6 - masala
{
    class Organization{
        constructor(name, founder, address, employeeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeeCount = employeeCount
        }

        getInfo(){
            return `name: ${this.name}, founder: ${this.founder}, address: ${this.address}, employeeCount: ${this.employeeCount}`
        }
    }

    let organization = new Organization("Najot ta'lim", 'Temurbek Adhamov', "Chilonzor 9-mavze, 13/1", 400)
    console.log(organization.getInfo());
}