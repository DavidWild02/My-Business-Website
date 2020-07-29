<script lang="tsx">
import 'reflect-metadata';
import { VNode, CreateElement } from 'vue';
import { Prop, Vue, Component } from 'vue-property-decorator';

interface ListItem {
  date: Date,
  description?: string
}


@Component
export default class TimeScala extends Vue {
  @Prop({ default: [] }) readonly list!: Array<ListItem>;

  render?(h: CreateElement): VNode {
    function toMonthName(n: number): string {
      switch (n) {
        case 0: return 'Januar'; 
        case 1: return 'Februar'; 
        case 2: return 'März'; 
        case 3: return 'April'; 
        case 4: return 'Mai'; 
        case 5: return 'Juni'; 
        case 6: return 'Juli'; 
        case 7: return 'August'; 
        case 8: return 'September';
        case 9: return 'Oktober'; 
        case 10: return 'November';
        case 11: return 'Dezember';
        default: return 'error';
      }
    }

    return(
      <ul>
        { this.list
              .map((item: ListItem) => {
            if (item.description) {
              return (
                <li>
                  <div class="date-small">{ `${toMonthName(item.date.getMonth())}, ${item.date.getFullYear()}`  }</div>
                  <div class="line-h"/>
                  <span>{ item.description }</span>
                </li>
              )
            } else {
              return (
                <li>
                  <div class="date-big">{ item.date.getFullYear() }</div>
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


</style>