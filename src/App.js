import Card from './components/Card'
import SideBar from './components/SideBar'
import React from 'react'


function App() {
  const [recipees,setRecipees]=React.useState([])
  const [lunch,setLunch]=React.useState([])
  const [dinner,setDinner]=React.useState([])
  const [breakfast,setBreakfast]=React.useState([])
  const [what,setWhat]=React.useState('Home')

  React.useEffect(() => {
      fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => setRecipees(data.recipes))
      
    },[])
    
    function handleMeal(e){
       setWhat(e.target.value)
       if(e.target.value==='Lunch'){
        setLunch(recipees.filter((recipi)=> recipi.mealType.includes('Lunch')))
       }else if(e.target.value==='Dinner'){
        setDinner(recipees.filter((recipi)=> recipi.mealType.includes('Dinner')))
       }else if(e.target.value==='Breakfast'){
        setBreakfast(recipees.filter((recipi)=> recipi.mealType.includes('Breakfast')))
       }
    } 
    
    const allrecipes=recipees.map(item => <Card key={item.id} {...item} />);
    const lunches=lunch.map(item => <Card key={item.id} {...item} />);
    const dinners=dinner.map(item => <Card key={item.id} {...item} />);
    const breakfasts=breakfast.map(item => <Card key={item.id} {...item} />);
    function chooseContent(meal){
      if(meal==='Lunch'){
        return lunches
      }else if(meal==='Dinner'){
        return dinners
      }else if(meal==='Breakfast'){
        return breakfasts
      }else{
        return allrecipes
      }
    }
    
    return (
   <div className='flex flex-row overflow-hidden font-sans'>
    <SideBar handle={handleMeal} />
    <div className='p-8 lg:w-fit md:w-9/12 lg:ml-40 md:ml-48'>
      <h2 className='font-bold text-cyan-950 text-3xl '>{what}</h2>
    <div className='my-8 flex flex-row flex-wrap gap-4'>
      {chooseContent(what)}
    </div>
    </div>
   </div>
  );
}

export default App;
