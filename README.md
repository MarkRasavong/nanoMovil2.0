# Nano Móvil 2.0

A mock Valencian mobile shope with ecommerence functionality using stripe and commerce.js.

**Link to project this project (current):** https://nano-movil2-0.vercel.app/
**Link to project original project:** https://nano-movil.netlify.app/

**To Test Transactions Card follow the payment details below**

- Card Number: 4242 4242 4242 4242
- Expiry Date: 04/24
- CVC: 242
- Postal Code: 42242

## BEFORE

![nano móvil before](./nano1_animation.gif)

## AFTER

![nano móvil before](./nano1_animation.gif)

## How It's Made:

**Tech used:** HTML, CSS(Styled Components), JavaScript, React.js/Next.js, Redux Toolkit, React Form Hook
**APIs used:** Stripe, commerce.js

- All products were created from commerce.js and then used it's API to render the data we wanted. If any new products or a change of product detail has occured it can be easily managed from commerce API. The utilization of react redux keeps tracks of any cart movements and changes in our products.

## Optimizations

Card completely rerenders every time quantity has changed in the cart section. Can be improved creating a useState hook of the current quantity values and product prices. Registration form can also be hard coded and not rely on fetching the data from the API since there is not much data to be displayed.

## Lessons Learned:

✅ Hand customized TextInputs and Cards. <br>
✅ TS Error Handling with potential outputs of 'null'. <br>
✅ Use of CSS pointer-events <br>
✅ Utilizing AppDispatch && AppSelector if a slice uses a thunk. <br>

## Where to find more:

**Personal Website:** https://markrasavong.com/ <br>
**nanoMovil2.0 Repository:** https://github.com/MarkRasavong/nanoMovil2.0 <br>
**My Github Repositories:** https://github.com/MarkRasavong?tab=repositories <br>
