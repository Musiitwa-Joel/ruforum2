import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const budgetItems = [
  { category: 'Research Grants', allocated: 250000, spent: 175000 },
  { category: 'Training Programs', allocated: 150000, spent: 82000 },
  { category: 'Infrastructure', allocated: 100000, spent: 45000 },
  { category: 'Administrative', allocated: 75000, spent: 60000 },
];

export function BudgetContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Budget Overview</h2>
        <div className="space-y-6">
          {budgetItems.map((item) => {
            const percentage = (item.spent / item.allocated) * 100;
            return (
              <div key={item.category}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">
                    ${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}