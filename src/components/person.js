function Person({ name, age, image}) {
   return (
      <div>
         <p>My name is: {name}</p>
         <p> My age is:{age} years old</p>
         <img src={image} alt="person" />
      </div>
   )

}

export default Person
