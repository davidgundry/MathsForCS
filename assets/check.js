function checkAnswers(...questions)
{
    for(q of questions)
    {
        let element = document.getElementById(q)
        if (element)
            update(element)
        if (!element)
        {
            let i = 1
            let a = document.getElementById(q+i)
            while (a)
            {
                update(a)
                i++
                a = document.getElementById(q+i)
            }
        }
    }
}

function update(element)
{
    let answer = checkAnswer(element)
    let check = document.getElementById(element.id+"c");
    if (check)
    {
        if (answer)
        {
            check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
            check.style.color = "green";
        }
        else
        {
            check.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
            check.style.color = "red";
        }
    }
}

function checkAnswer(element)
{
    if (element.dataset.answer !== undefined)
    {
        if (element.type === "checkbox")
            return (element.dataset.answer === "true") === element.checked;
        else
            return element.dataset.answer === element.value;  
    }
    else if  (element.dataset.answerSet !== undefined)
    {
        let t = element.value.replace(/\s/g,'').split(",");
        let a = element.dataset.answerSet.replace(/\s/g,'').split(",");
        let test = new Set(t)
        let answers = new Set(a)
        return t.length === a.length && isSameSet(test,answers);
    }
}

function isSameSet(a, b)
{
    let s = new Set([...a,...b])
    return s.size === a.size && s.size === b.size;
}