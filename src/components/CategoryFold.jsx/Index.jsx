import classes from "./style.module.scss"
function Category(props) {
  const CategoryData = [
    {
      text: "Women's fashion",
      icon: "fas fa-female",
    },
    {
      text: "Men's fashion",
      icon: "fas fa-male",
    },
    {
      text: "Phones & Telecomunications",
      icon: "fas fa-mobile",
    },
    {
      text: "Computer Office and Security",
      icon: "fas fa-lock",
    },
    {
        text:"Consumerr Electronics",
        icon:"fas fa-tv"
    },
    {
        text:"Jewerly & Watches",
        icon:"fas fa-gem"
    },
    {
        text:"Home,Pet & Appilances",
        icon:"fas fa-cat"
    },
    {
        text:"Bags and Shoes",
        icon:"fas fa-shopping-bag"
    }
  ];
  return (
    <div className={classes.categoryDiv}>
      <strong className={classes.catText}>CATEGORY</strong>
      <ul>
        {CategoryData.map((data) => (
          <li className={` ${data.icon} + ${classes.forLi}`} >{data.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
