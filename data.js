let data = {

"members":[

	{
		"refNumber": "27743",
		"person": {

			"name": {"first": "MOGOTLANE, JN"},
			"DOB": "13/08/1965",

		},
		"membership": {

			"joinedDate": "01/09/1998",
			"startDate": "01/05/1986",
			"retirement": {
				"date": {
					"age": {"60": "01/09/2025", "65":"01/09/2030"}
				}
			},
			"pension": {
				"salaries":{
					"annual" : "R347 698.00",
					"average": "R315 719.47"
				}
			},
			"service": {
				"actual": "32Y:03M",
				"projected": {"60": "39Y:04M", "65": "44Y:04M"}
			}
		},
		"benefits": [

			 {
			 	"name": "NORMAL RETIREMENT",
			 	"details":
				[
					{
						"age": "60",
						"gratuity": "R835 226.60",
						"pension": "R18 831.80",
						"total": "R3 445 309.74"
				    },
				    {
						"age": "65",
						"gratuity": "R941 366.47",
						"pension": "R21 224.93",
						"total": "R3 883 136.69"
				    }
				]
			},

			{
				"name": "DISABILITY INCOME",
				"age": "65",
				"description": "The Monthly Income Benefit for which you may qualify is equal to",
				"amount": "R20 059.50"
			},

			{
				"name": "DREAD DISEASE",
				"age": "65",
				"description": "75% of annual insured salary - refer contents overleaf",
				"amount": "R260 773.50"
			},

			{
				"name": "DEATH",
				"age": "65",
				"details": [
					{
						"name": "Life Assurance Benefit",
						"description": "A Life Assurance Benefit equal to a multiple of your final annual salary",
						"amount": "R1 130 018.50"
					},
					{
						"name": "Accumulated Benefit",
						"description": "Your Accumulated Benefit",
						"amount": "R1 629 222.57"
					}
				],
				"total": "R2 759 241.07"
				
				
				
			},

			{
				"name": "FAMILY FUNERAL",
				"age": "65",
				"description": "Refer contents of benefit overleaf",
				"amount":"R0.00"
			},

			{
				"name": "FAMILY SUPPORT",
				"age": "65",
				"description": "An amount payable in instalment - refer contents overleaf",
				"amount": "R50 000.00"
			},

			{
				"name": "IN-HOSPITAL ACCIDENT",
				"age": "65",
				"description": "An amount payable once per annum in an accident event",
				"amount": "R7 500.00"
			},

			{
				"name": "RESIGNATION",
				"age": "65",
				"description": "Minimum Individual Reserve Value (MIR)",
				"amount": "R2 289 093.07"
			},

			{
				"name": "RETRENCHMENT",
				"age": "65",
				"description": "The benefit amount as determined in terms of the rules or the actuarial reserve value",
				"amount": "R1 578 306.42"
			}
		]

	}
   

  ]
}


export default data.members;



