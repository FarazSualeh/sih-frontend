"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const demoAccounts = [
  ["student123@gmail.com", "Student", "/student"],
  ["admin123@gmail.com", "Admin", "/admin"],
  ["academician@gmail.com", "Academician", "/academician"],
  ["industry@gmail.com", "Industry", "/industry"],
] as const;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const account = demoAccounts.find(
      ([address]) => address === email.trim().toLowerCase(),
    );
    if (!account || !password.trim()) {
      setError(
        !password.trim()
          ? "Enter your password to continue."
          : "Use one of the demo email addresses below.",
      );
      return;
    }
    setError("");
    setLoading(true);
    window.setTimeout(() => router.push(account[2]), 350);
  };

  return (
    <main className="grid min-h-screen bg-[#f8f8f5] text-ink lg:grid-cols-[0.9fr_1.1fr]">
      <section className="relative hidden overflow-hidden bg-ink p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <Link href="/" className="flex w-fit items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-coral">
            <Sparkles size={18} />
          </span>
          <span className="font-display text-[1.3rem] font-bold tracking-[-0.04em]">
            skill<span className="text-coral">connect</span>
          </span>
        </Link>
        <div className="relative z-10 max-w-lg">
          <p className="eyebrow text-[#b3b8b0]">Your next move</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.07em]">
            Turn your skills into <span className="text-coral">momentum.</span>
          </h1>
          <p className="mt-6 text-base leading-7 text-[#b3b8b0]">
            Assess what you know, build what is missing and connect with
            opportunities made for your direction.
          </p>
          <div className="mt-8 space-y-3 text-sm text-[#d0d5cd]">
            <p className="flex items-center gap-3">
              <Check size={16} className="text-coral" />A living profile of your
              strengths
            </p>
            <p className="flex items-center gap-3">
              <Check size={16} className="text-coral" />
              Clear next steps for skill gaps
            </p>
            <p className="flex items-center gap-3">
              <Check size={16} className="text-coral" />
              Evidence industry teams can trust
            </p>
          </div>
        </div>
        <p className="text-xs text-[#7f887f]">SkillConnect</p>
        <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full border border-white/10" />
      </section>
      <section className="flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 flex w-fit items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
          >
            <ArrowLeft size={16} />
            Back to SkillConnect
          </Link>
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-coral text-white">
                <Sparkles size={18} />
              </span>
              <span className="font-display text-[1.3rem] font-bold tracking-[-0.04em]">
                skill<span className="text-coral">connect</span>
              </span>
            </div>
          </div>
          <Card>
            <CardHeader>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e9f0e8] text-olive">
                <LockKeyhole size={20} />
              </span>
              <CardTitle className="mt-4 text-3xl">Welcome back</CardTitle>
              <p className="text-sm leading-6 text-muted">
                Sign in to pick up where your skills left off.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={signIn} className="space-y-4">
                <label className="block text-sm font-semibold">
                  Email
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-2"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Password
                  <Input
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Your password"
                    className="mt-2"
                  />
                </label>
                {error && (
                  <p
                    role="alert"
                    className="rounded-xl bg-[#fdeae7] px-3 py-2 text-sm font-medium text-[#b33d2d]"
                  >
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  className="h-11 w-full"
                  disabled={loading}
                >
                  {loading ? "Opening workspace..." : "Sign in"}
                  <ArrowRight size={16} />
                </Button>
              </form>
              <div className="mt-7 border-t border-line pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Demo access
                </p>
                <div className="mt-3 space-y-2">
                  {demoAccounts.map(([address, role]) => (
                    <button
                      key={address}
                      type="button"
                      onClick={() => {
                        setEmail(address);
                        setPassword("demo");
                        setError("");
                      }}
                      className="flex w-full items-center justify-between rounded-xl bg-[#f8f8f5] px-3 py-2.5 text-left text-xs transition hover:bg-[#e9f0e8]"
                    >
                      <span>
                        <span className="block font-semibold">{role}</span>
                        <span className="text-muted">{address}</span>
                      </span>
                      <span className="text-coral">Use</span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="mt-5 text-center text-xs text-muted">
            Prototype mode · Your password is accepted.
          </p>
        </div>
      </section>
    </main>
  );
}
