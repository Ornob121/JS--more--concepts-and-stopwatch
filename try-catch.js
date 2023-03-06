function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter an number"
        }
        else if(age < 18){
            throw "Under aged people are not allowed"
        }
        else if(age > 30){
            throw "Over aged people are not allowed"
        }
        else{
            errorTag.innerText = ''
        }
    }
    catch(err){
        errorTag.innerText = `ERROR ${err}`
    }
    finally{
        console.log('All done inside try catch')
        console.log(1111)
    }
}

