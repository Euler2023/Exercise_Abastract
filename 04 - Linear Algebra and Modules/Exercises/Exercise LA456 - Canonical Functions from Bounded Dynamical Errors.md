---
title: "Exercise LA456: Canonical Functions from Bounded Dynamical Errors"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - stability
  - dynamical-systems
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 14, printed p. 598, PDF p. 613"
created: 2026-09-29
---

# Exercise LA456: Canonical Functions from Bounded Dynamical Errors

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 14 (Tate)
> Let $S$ be a set and $f:S\to S$ a map of $S$ into itself. Let $h:S\to\mathbb R$ be a real valued function. Assume that there exists a real number $d>1$ such that $h\circ f-df$ is bounded. Show that there exists a unique function $h_f$ such that $h_f-h$ is bounded, and $h_f\circ f=dh_f$.
>
> **Printed hint:** Let
>
> $$
> h_f(x)=\lim_{n\to\infty}\frac{h(f^n(x))}{d^n}.
> $$

> [!warning] Source issue: the printed defect has the wrong map
> The source prints $h\circ f-df$. Since $f$ takes values in an arbitrary set $S$, multiplication of $f$ by the real scalar $d$ need not be defined, and it cannot generally be subtracted from a real-valued function. The statement and hint become consistent upon replacing the defect by $h\circ f-dh$. The proof below uses this corrected hypothesis.

## Hints

> [!hint]- Hint 1
> If $|h(f(x))-dh(x)|\le C$, compare consecutive terms $d^{-n}h(f^n(x))$ and sum the resulting geometric series.

> [!hint]- Hint 2
> A bounded difference $u$ between two proposed functions satisfies $u(f^n(x))=d^nu(x)$. Since $d>1$, this forces $u(x)=0$.

## Solution

> [!success]- Independent derivation under the corrected hypothesis
> Choose $C\ge0$ such that $|h(f(x))-dh(x)|\le C$ for every $x\in S$. Write $f^0=\operatorname{id}_S$ and $f^n$ for the $n$-fold iterate, and define
>
> $$
> h_n(x)=d^{-n}h(f^n(x)).
> $$
>
> For every $n\ge0$,
>
> $$
> |h_{n+1}(x)-h_n(x)|
> =d^{-n-1}|h(f^{n+1}(x))-dh(f^n(x))|
> \le Cd^{-n-1}.
> $$
>
> The geometric series converges because $d>1$. Thus $(h_n(x))$ is Cauchy in $\mathbb R$ for each $x$ and has a limit $h_f(x)$. Its tail is uniformly bounded by
>
> $$
> |h_f(x)-h_n(x)|
> \le\sum_{j=n}^{\infty}Cd^{-j-1}
> =\frac{C}{(d-1)d^n}.
> $$
>
> In particular $|h_f(x)-h(x)|\le C/(d-1)$ for all $x$. Shifting the index in the limit gives the exact functional equation
>
> $$
> h_f(f(x))
> =\lim_{n\to\infty}d^{-n}h(f^{n+1}(x))
> =d\lim_{n\to\infty}h_{n+1}(x)
> =dh_f(x).
> $$
>
> If $k:S\to\mathbb R$ is another function with $k\circ f=dk$ and $k-h$ bounded, then $u=k-h_f$ is globally bounded, say by $M$, and $u\circ f=du$. Iterating this equality yields
>
> $$
> |u(x)|=d^{-n}|u(f^n(x))|\le Md^{-n}\longrightarrow0.
> $$
>
> Hence $u=0$ and $k=h_f$, proving uniqueness. The proof also covers the empty set, on which there is only one function with the given codomain.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA455 - Stability of Approximately Additive and Biadditive Maps|Exercise LA455]]

## Notes

- **Source and proof status:** The printed statement, including $df$, and the hint were checked on [S2, Ch. XV, Ex. 14, printed p. 598, PDF p. 613]. The replacement by $dh$ is an explicitly identified correction inferred from types and the requested functional equation. The convergence estimate and proof are independently supplied.
- **Scope:** No norm, topology, invertibility, or surjectivity on $S$ is needed. The only completeness used is that of $\mathbb R$. The scalar inequality $d>1$ supplies both summability and uniqueness.
- **Routing:** This is the scalar rescaling version of the preceding stability exercise, using a geometric estimate and a linear functional equation. It is retained with that linear-algebra batch rather than classified by a later arithmetic application.
