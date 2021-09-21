module.exports = function Counter(){
    let counter1 = 0;
    const reminders =[];

    function counter(){
        counter1++;
    }

    function result(){
        return counter1
    }

    function data(){
        
        const firstName= "Mawande"
        const bookCount= 3
        const dayCount=1
        
        return {
            firstName,
            bookCount,
            dayCount
        }
    }

    let firstName;
    let bookCount;
    let dayCount;

    

    function setInfo(set){
        firstName=set.firstName;
        bookCount=Number(set.bookCount);
        dayCount=Number(set.dayCount);

        return {
            firstName,
            bookCount,
            dayCount
        }
    }

    function getEntry(){
        reminders.push(firstName);
    }

    function outPutForCount(){
        let rems = reminders.length;
        return rems
        
    }


    return {
        counter,
        result,
        data,
        setInfo,
        getEntry,
        outPutForCount
    }
}