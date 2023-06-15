// <reference types="cypress"/>

describe(' Checkout with CashOnDelivery ' , () => {

    before(() => 
    {
        it('login', ()=> {
      // Visit the website and sign in before running the tests
      cy.visit('https://cloudhosta.com:63/myaccount/user-login.php?lang=en');
      cy.get('[class="login-form MD-form MD-inputs"]').should('be.visible');
      cy.get('#login_email').should('be.visible').should('exist').type('Bassant.atef@mitchdesigns.com' , { force: true });
      cy.get('#login_password').should('be.visible').type('UM*ynM2KGEPX83zYfQcLY@wC{enter}', { force: true });

    });
   });

    describe('Add items to cart' , () => {
    
        it('Add items to cart and login' , () =>
        {
          const cities = ['القاهرة', 'الجيزة', 'الفيوم']; // List of available cities
          const areas = {
                City1: ['الزمالك', 'مدينتي', 'معادي الزهراء'], // List of available areas for City1
                City2: ['الواحات', 'حدائق الاهرام', 'وادي النيل'], // List of available areas for City2
                City3: ['الفيوم']  // List of available areas for City3
        };
         const districts = {
      City1: {
        Area1: ['ابو الفدا', 'احمد حشمت', 'احمد صبري'], // List of available districts for City1, Area1
        Area2: ['الحديقه المركزيه', 'داخل مدينتي', 'ساوز بارك'], // List of available districts for City1, Area2
        Area3: ['ابراج سما', 'المسجد الكويتي', 'المقطم']  // List of available districts for City1, Area3
      },
      City2: {
        Area4: ['الانتاج الاعلامي', 'الفردوس جيش', 'الفردوس شرطه'], // List of available districts for City2, Area4
        Area5: ['الرمايه الاستثماري', 'الرمايه الضباط', 'الرمايه النقابات'], // List of available districts for City2, Area5
        Area6: ['الجهاد', 'سيد حبيش', 'سيناء']  // List of available districts for City2, Area6
      },
      City3: {
        Area7: ['البحارى', 'التعاونيات', 'الحادقه', 'الحواتم', 'السلخانه', 'الشيخ حسن', 'الشيخ سالم', 'العبود', 'العبودي'], // List of available districts for City3, Area7
      }
    };


    function getAreasForCity(city) {
      // Replace with your logic to fetch and return the available areas for the given city
      // For example, you can have a data structure or API call that provides the areas based on the city
      // Return an array of areas for the city
      if (city === 'City1') {
        return ['Area1', 'Area2', 'Area3'];
      } else if (city === 'City2') {
        return ['Area4', 'Area5', 'Area6'];
      } else if (city === 'City3') {
        return ['Area7'];
      }
      // Handle any other cases or return an empty array if no areas are available for the city
      return [];
    };
      // Define the function to retrieve available districts for a city and area
    function getDistrictsForCityAndArea(city, area) {
    // Replace with your logic to fetch and return the available districts for the given city and area
    // For example, you can have a data structure or API call that provides the districts based on the city and area
    // Return an array of districts for the city and area
    if (city === 'City1' && area === 'Area1') {
      return ['District1', 'District2', 'District3'];
    } else if (city === 'City2' && area === 'Area4') {
      return ['District4', 'District5', 'District6'];
    } else if (city === 'City3' && area === 'Area7') {
      return ['District7', 'District8', 'District9','District10', 'District11', 'District12','District13', 'District14', 'District15'];
    }
    // Handle any other cases or return an empty array if no districts are available for the city and area
    return [];
  };

            
           // const districts = ['District1', 'District2', 'District3']; // List of available districts
    
            cy.visit("https://cloudhosta.com:63/shop/");
            cy.get('[class="icon_add  product_448"]').click({multiple:true ,force: true });
            cy.get('[class="open_checkout"]').should('be.visible').click({multiple:true});
            cy.wait(200);
            cy.get('#billing_first_name').should('be.visible').type('Bassant');
            cy.get('#billing_last_name').should('be.visible').type('Atef');
            cy.get('#billing_email').should('be.visible').type('Bassant.atef@mitchdesigns.com');
            cy.get('#billing_phone').should('be.visible').type('01272199962');
            const randomCity = cities[Math.floor(Math.random() * cities.length)];

              cy.get('#billing_state').select(randomCity).then(() => {
                // Fetch available areas based on the selected city
                const availableAreas = getAreasForCity(randomCity); // Replace with your logic to retrieve available areas

                // Select a random area from the available areas
                const randomArea = availableAreas[Math.floor(Math.random() * availableAreas.length)];
                console.log('Random Area:', randomArea);
                cy.get('select[name="billing_street"]').select(randomArea);

                // Fetch available districts based on the selected city and area
                const availableDistricts = getDistrictsForCityAndArea(randomCity, randomArea); // Replace with your logic to retrieve available districts

                // Select a random district from the available districts
                const randomDistrict = availableDistricts[Math.floor(Math.random() * availableDistricts.length)];
                cy.get('select[name="billing_city"]').select(randomDistrict);
              });


            // Select random options from the available lists
           // const randomCity = cities[Math.floor(Math.random() * cities.length)];
            //const randomArea = areas[Math.floor(Math.random() * areas.length)];
            //const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

            //cy.get('#billing_state').select(randomCity);
            //cy.get('select[name="billing_street"]').select(randomArea);
            //cy.get('select[name="billing_city"]').select(randomDistrict);
            
            
            
            
            /*cy.get('#billing_state').select('الفيوم');
            cy.get('select[name="billing_street"]').select('الفيوم');
            cy.get('select[name="billing_city"]').select('السلخانه'); */
            cy.get('#billing_address_1').should('be.visible').type('1');
            cy.get('#billing_building').should('be.visible').type('1');
            cy.get('#billing_building_2').should('be.visible').type('1');
            cy.get('[id="payment_method_cod"]').check({force:true});
            cy.get('[class="button alt"]').click();
        });
         
        

        });
    });
 