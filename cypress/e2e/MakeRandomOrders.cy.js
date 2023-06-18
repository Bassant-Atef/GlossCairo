// <reference types="cypress"/>

describe('Checkout with CashOnDelivery', () => {
  before(() => {
    it('login', () => {
      // Visit the website and sign in before running the tests
      cy.visit('https://cloudhosta.com:63/myaccount/user-login.php?lang=en');
      cy.get('[class="login-form MD-form MD-inputs"]').should('be.visible');
      cy.get('#login_email').should('be.visible').should('exist').type('Bassant.atef@mitchdesigns.com', { force: true });
      cy.get('#login_password').should('be.visible').type('UM*ynM2KGEPX83zYfQcLY@wC{enter}', { force: true });
    });
  });

  describe('Add items to cart', () => {
    it('Add items to cart and login', () => {
      const cities = ['القاهرة', 'الجيزة', 'الفيوم']; // List of available cities

      const areas = {
        القاهرة: ['الزمالك', 'مدينتي', 'معادي الزهراء'],
        الجيزة: ['الواحات', 'حدائق الاهرام', 'وادي النيل'],
        الفيوم: ['الفيوم']
      };

      const districts = {
        القاهرة: {
          الزمالك: ['ابو الفدا', 'احمد حشمت', 'احمد صبري'],
          مدينتي: ['الحديقه المركزيه', 'داخل مدينتي', 'ساوز بارك'],
          'معادي الزهراء': ['ابراج سما', 'المسجد الكويتي', 'المقطم']
        },
        الجيزة: {
          الواحات: ['الانتاج الاعلامي', 'الفردوس جيش', 'الفردوس شرطه'],
          'حدائق الاهرام': ['الرمايه الاستثماري', 'الرمايه الضباط', 'الرمايه النقابات'],
          'وادي النيل': ['الجهاد', 'سيد حبيش', 'سيناء']
        },
        الفيوم: {
          الفيوم: ['البحارى','التعاونيات','الحادقه','الحواتم','السلخانه','الشيخ حسن','الشيخ سالم','العبود','العبودي']
        }
      };

      // Define the function to retrieve available areas for a city
      function getAreasForCity(city) {
        return areas[city] || [];
      }

      // Define the function to retrieve available districts for a city and area
      function getDistrictsForCityAndArea(city, area) {
        return districts[city] && districts[city][area] || [];
      }

      cy.visit('https://cloudhosta.com:63/shop/');
      cy.get('[class="icon_add  product_448"]').click({ multiple: true, force: true });
      cy.get('[class="open_checkout"]').should('be.visible').click({ multiple: true });
      cy.wait(200);
      cy.get('#billing_first_name').should('be.visible').type('Bassant');
      cy.get('#billing_last_name').should('be.visible').type('Atef');
      cy.get('#billing_email').should('be.visible').type('Bassant.atef@mitchdesigns.com');
      cy.get('#billing_phone').should('be.visible').type('01272199962');

      const randomCity = cities[Math.floor(Math.random() * cities.length)];
        cy.get('#billing_state').select(randomCity).then(() => {
        const availableAreas = getAreasForCity(randomCity);

        const randomArea = availableAreas[Math.floor(Math.random() * availableAreas.length)];
        console.log('Random Area:', randomArea);
        cy.get('select[name="billing_street"]').select(randomArea);

        const availableDistricts = getDistrictsForCityAndArea(randomCity, randomArea);

        const randomDistrict = availableDistricts[Math.floor(Math.random() * availableDistricts.length)];
        cy.get('select[name="billing_city"]').select(randomDistrict);
      }); 

      cy.get('#billing_address_1').should('be.visible').type('1');
      cy.get('#billing_building').should('be.visible').type('1');
      cy.get('#billing_building_2').should('be.visible').type('1');
      cy.get('[id="payment_method_cod"]').check({ force: true });
      cy.get('[class="button alt"]').click();
    });
  });
});
