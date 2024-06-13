const increaseButtonE1 = document.querySelector('.counter__button--increase');
const decreaseButtonE1 = document.querySelector('.counter__button--decrease');
const resetButtonE1 = document.querySelector('.counter__reset-button');
const counterValueE1 = document.querySelector('.counter__value');
const counterTitleE1 = document.querySelector('.counter_title');
const counterE1 = document.querySelector('.counter');
const IncrementCounter = () =>
{
    const currentValue = counterValueE1.textContent;
    const currentValueAsnumber = +currentValue;
    let newValue = currentValueAsnumber + 1;
    if(newValue>5)
    {
        newValue=5;
        counterE1.classList.add('counter--limit');
        
        counterTitleE1.innerHTML= 'Limit! Buy <b>Pro<b> for >5';
        increaseButtonE1.disabled = true;
        decreaseButtonE1.disabled = true;
    }

  counterValueE1.textContent = newValue;
  increaseButtonE1.blur();
}
increaseButtonE1.addEventListener('click', 
IncrementCounter);
decreaseButtonE1.addEventListener('click', ()=>{
    const currentValue = counterValueE1.textContent;
    const currentValueAsnumber = +currentValue;
    let newValue = currentValueAsnumber - 1;
    if(newValue<0)
    {
        newValue = 0;
    }
  counterValueE1.textContent = newValue;
  decreaseButtonE1.blur();
});
resetButtonE1.addEventListener('click',()=>{
    counterValueE1.textContent = 0;
    counterE1.classList.remove('counter--limit');
    counterTitleE1.textContent = 'Fancy Counter';
    increaseButtonE1.disabled = false;
    decreaseButtonE1.disabled = false;
    resetButtonE1.blur(); 
});
document.addEventListener('keyup',IncrementCounter);