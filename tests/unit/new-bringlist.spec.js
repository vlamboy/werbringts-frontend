import { mount } from '@vue/test-utils';
import NewBringlistView from '@/views/NewBringlistView';
import ButtonBar from '@/components/ButtonBar';
import NamePopup from '@/components/NamePopup';

describe('Testing NewBringslist.vue', () => {
  beforeAll(() => {
    const fullBringList = {
      bringlistId: 86,
      listName: 'Geburtstag',
      listDescription: 'Geburtstag von Berta',
      productsBroughtList: [
        {
          productId: 146,
          productName: 'Tomaten',
          needed: 37,
          bringersList: [
            {
              amount: 17,
              personName: 'Magdalena',
            },
            {
              amount: 20,
              personName: 'Vivi',
            },
          ],
        },
      ],
    };

    jest.spyOn(NewBringlistView.methods, 'loadProducts').mockReturnValue(fullBringList);
  });

  it('should show page title', () => {
    const wrapper = mount(NewBringlistView, {
      attachTo: document.body,
    });

    expect(wrapper.text()).toMatch('Deine neue Werbringts-Liste');
    wrapper.unmount();
  });

  it('should show title of bringlist description', () => {
    const wrapper = mount(NewBringlistView, {
      attachTo: document.body,
    });

    expect(wrapper.text()).toMatch('Infos und Beschreibung');
    wrapper.unmount();
  });

  it('should have buttonBar component', () => {
    const wrapper = mount(NewBringlistView, {
      attachTo: document.body,
    });
    const buttonBar = wrapper.findComponent(ButtonBar);

    expect(buttonBar.exists()).toBeTruthy();
    wrapper.unmount();
  });

  it('should have NamePopup component', () => {
    const wrapper = mount(NewBringlistView, {
      attachTo: document.body,
    });
    const namePopup = wrapper.findComponent(NamePopup);

    expect(namePopup.exists()).toBeTruthy();
    wrapper.unmount();
  });
});
