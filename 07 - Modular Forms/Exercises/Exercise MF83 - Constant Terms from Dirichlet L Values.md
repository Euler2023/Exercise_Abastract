---
title: "Exercise MF83: Constant Terms from Dirichlet L Values"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.5, Exercise 4.5.2, printed p. 130, PDF p. 144"
source_refs:
  - "S7/ch-4/sec-5/ex-2"
created: 2026-10-28
---

# Exercise MF83: Constant Terms from Dirichlet L Values

## Problem Statement

> [!question] Original Exercise 4.5.2
> (a) Show that when $k$ is even, the constant term of $G_k^{\psi,\varphi}(\tau)$ is $(C_kg(\overline\varphi)/v^k)\psi(0)L(1-k,\varphi)$.
>
> (b) Show that when $k$ is odd, the constant term of $G_k^{\psi,\varphi}(\tau)$ is given by the same formula.
>
> The setting is $k\ge3$, $N=uv$, $\varphi$ primitive modulo $v$, and $(\psi\varphi)(-1)=(-1)^k$; $C_k=(-2\pi i)^k/\Gamma(k)$ and $g$ denotes the Gauss sum.

## Hints

> [!hint]- Hint 1
> Only the index $c=0$ contributes a constant term; its weight $\psi(0)$ vanishes unless $u=1$.

> [!hint]- Hint 2
> The raw constant is $2\psi(0)L(k,\overline\varphi)$. Apply the primitive Dirichlet functional equation with the appropriate parity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> From the principal-series constant coefficient, the constant of the defining triple sum is
> $$
> \psi(0)\sum_{d=0}^{v-1}\sum_{e=0}^{u-1}\overline\varphi(d)\zeta^{d+ev}(k).
> $$
> If $u>1$, then $\psi(0)=0$ and both sides of the requested identity vanish. If $u=1$, the $e$ sum has one term and the constant is $\sum_{m\ne0}\overline\varphi(m)m^{-k}$. The parity condition gives $\overline\varphi(-1)=(-1)^k$, so pairing $m$ and $-m$ makes this $2L(k,\overline\varphi)$. Thus it suffices to prove
> $$
> 2L(k,\overline\varphi)=\frac{C_kg(\overline\varphi)}{v^k}L(1-k,\varphi).
> $$
> **(a), even $k$.** The primitive even-character functional equation (4.18), applied to $\overline\varphi$ at $s=k$, gives
> $$
> \pi^{-k/2}\Gamma(k/2)v^kL(k,\overline\varphi)=\pi^{-(1-k)/2}\Gamma((1-k)/2)g(\overline\varphi)L(1-k,\varphi).
> $$
> The Gamma-factor ratio is $C_k/2$ by (4.16). Dividing and multiplying by $2$ proves the desired equality.
>
> **(b), odd $k=2m+1$.** The primitive odd-character functional equation (4.19) gives
> $$
> 2L(k,\overline\varphi)=\frac{-2i\pi^{k-1/2}}{v^k}\frac{\Gamma(1-k/2)}{\Gamma((k+1)/2)}g(\overline\varphi)L(1-k,\varphi).
> $$
> The recurrence and $\Gamma(1/2)=\sqrt\pi$ give $\Gamma(1-k/2)=\Gamma(1/2-m)=(-4)^mm!\sqrt\pi/(2m)!$, while $\Gamma((k+1)/2)=m!$. Therefore the scalar numerator is
> $$
> -2i\pi^{2m+1/2}\frac{(-4)^m\sqrt\pi}{(2m)!}=\frac{(-2\pi i)^{2m+1}}{(2m)!}=C_k.
> $$
> Substituting proves the same result in odd weight. Reintroducing $\psi(0)$ establishes both parts, including the cases where the constant is zero.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.5.2, printed p. 130 / PDF p. 144]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** The constant-term reduction was checked on printed p.128/PDF p.142. The primitive Dirichlet functional equations (4.18),(4.19) are imported as explicitly unproved analytic inputs from printed p.121/PDF p.135. The hypothesis that $\varphi$ is primitive is essential for using exactly these Gauss-sum functional equations.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
