<script lang="ts">
import {Prop, Vue, Component} from 'vue-property-decorator';

interface ListItem {
  date: Date,
  description?: String
}


@Component()
export default class TimeScala extends Vue {
  @Prop({ default: [] }) readonly list: Array<ListItem>;

  render(h) {
    return (
      <ul>
        {
          this.list
              .sort((a, b) => b.date - a.date)
              .map(item => {
            if (item.description) {
              return (
                <li>
                  <h3>{ item.date }</h2>
                  <div class="line-h"/>
                  <p> { item.description }</p>
                </li>
              )
            } else {
              return (
                <li>
                  <h2>{ Date.getYear(item.date) }</h2>
                </li>
              )
            }
          })
        }
      </ul>
    )
  }
}
</script>


<style lang="sass">
.li-point


.li-date

</style>