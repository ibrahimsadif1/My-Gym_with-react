import PriceOption from "./PriceOption";


const PriceOptions = () => {



    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio and weightlifting areas",
                "Unlimited gym usage",
                "Nutrition advice"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "All Basic Membership features",
                "Access to group fitness classes",
                "Personalized fitness assessment",
                "Discounts on personal training sessions",
                "Sauna and steam room access",
                "Monthly fitness workshops", 
                "Unlimited gym usage",
                "Valid student ID required",
                "Discounts on group fitness classes",
                "Access to study lounge",

            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 80,
            "features": [
                "All Premium Membership features",
                "Access for up to 4 family members",
                "Childcare services",
                "Nutrition counseling sessions",
            ]
        },
        {
            "id": 4,
            "name": "Student Membership",
            "price": 25,
            "features": [
                "Access to cardio and weightlifting areas",
                "Unlimited gym usage",
                "Valid student ID required",
                "Discounts on group fitness classes",
                "Access to study lounge",
                "Flexible class schedule"
            ]
        }
    ]








    return (
        <div>
            <h2 className="text-4xl font-bold my-7 ml-5 text-rose-600 text-center">Best Prices in the Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;