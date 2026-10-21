import Button from "../Components/UI/Button";
import Input from "../Components/UI/Input";
import Card from "../Components/UI/Card";
import Badge from "../Components/UI/Badge";

function DashboardPage() {
  return (
    <div className="space-y-6">

      {/*  BUTTONS */}
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold text-ink">
          Buttons
        </h2>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            Primary
          </Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button variant="primary" disabled>
            Disabled
          </Button>

        
        </div>
      </Card>

      {/*  INPUTS  */}
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold text-ink">
          Inputs
        </h2>

        <div className="max-w-md space-y-4">

          {/* Normal Input */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          {/* Error Input */}
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            error="Password is required"
          />

          {/* Disabled Input */}
          <Input
            label="Disabled Input"
            type="text"
            placeholder="Cannot edit this field"
            disabled
          />

          

        </div>
      </Card>

      {/*  BADGES*/}
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold text-ink">
          Badge Tones
        </h2>

        <div className="flex flex-wrap gap-3">

          <Badge tone="blue">
            Applied
          </Badge>

          <Badge tone="purple">
            Assessment
          </Badge>

          <Badge tone="amber">
            Interview
          </Badge>

          <Badge tone="green">
            Offer
          </Badge>

          <Badge tone="red">
            Rejected
          </Badge>

          <Badge tone="gray">
            Saved
          </Badge>

        </div>
      </Card>

    </div>
  );
}

export default DashboardPage;