

export default function HelpCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <Icon className="text-4xl text-green-600" />

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
