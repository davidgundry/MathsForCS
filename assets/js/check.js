function checkAnswers(...questions)
{
    for(q of questions)
    {
        let element = document.getElementById(q)
        if (element)
        {
            let answer = checkAnswer(element)
            updateCheckElement(q, answer)
        }
        if (!element)
        {
            let i = 1
            element = document.getElementById(q+i)
            if (element)
                while (element)
                {
                    let answer = checkAnswer(element)
                    updateCheckElement(q+i, answer)
                    i++
                    element = document.getElementById(q+i)
                }
            else
            {
                elements = document.getElementsByName(q);
                if (elements.length > 0)
                {
                    let answer = checkRadioAnswer(elements)
                    updateCheckElement(q, answer)
                }
                else
                {
                    let i = 1
                    elements = document.getElementsByName(q+i)
                    while (elements.length > 0)
                    {
                        let answer = checkRadioAnswer(elements)
                        updateCheckElement(q+i, answer)
                        i++
                        elements = document.getElementsByName(q+i)
                    }
                }
            }
        }
    }
}

function checkRadioAnswer(elements)
{
    for (let i=0;i<elements.length;i++)
    {
        if ((elements[i].checked) && (elements[i].dataset.answer !== undefined))
            return true;
    }
    return false;
}

function updateCheckElement(id, answer)
{
    let check = document.getElementById(id+"c");
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