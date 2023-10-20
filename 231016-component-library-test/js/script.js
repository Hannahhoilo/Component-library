const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

overviewButtons.forEach(overviewButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentToShow = button.dataset.componentToShow;
	
		overviewButtons.forEach(overviewButton => {
			overviewButton.classList.remove('overview__button--active');

			if (overviewButton.dataset.componentToShow === componentToShow) {
				button.classList.add('overview__button--active');
			}
		})
	
		components.forEach(component => {
			component.classList.remove('component--visible');
	
			const componentName = component.dataset.componentName;
	
			if (componentName === componentToShow) {
				component.classList.add('component--visible');
			}
		});
	}

	overviewButton.addEventListener('click', displayComponent);
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');
	
	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}
	
	accordionToggle.addEventListener('click', displayAccordionContent);
})

const componentTriggersButtons = document.querySelectorAll('.component-triggers__button');

componentTriggersButtons.forEach(componentTriggerButton => {
	const createToastElement = (message, type) => {
		const toastContainer = document.createElement('div');

		toastContainer.className = 'toast';			
		toastContainer.className += ' toast--' + type;
		toastContainer.textContent = message;
		
		return toastContainer;
	}

	const triggerState = (event) => {
		const button = event.currentTarget;
		const stateToTest = button.dataset.stateToTest;
		const testToastElement = createToastElement("This is a message", stateToTest);
		
		document.body.appendChild(testToastElement);
	}
	
	componentTriggerButton.addEventListener('click', triggerState);
})