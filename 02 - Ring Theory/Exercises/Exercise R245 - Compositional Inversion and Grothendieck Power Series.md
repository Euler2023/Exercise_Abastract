---
title: "Exercise R245: Compositional Inversion and Grothendieck Power Series"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 22, printed p. 218, PDF p. 233"
created: 2026-09-06
---

# Exercise R245: Compositional Inversion and Grothendieck Power Series

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 22
> Let $s=at+\text{higher terms}\in K[[t]]$ with $a$ a unit in $K$. Show that there is a power series $t=g(s)=\sum_i b_is^i$, $b_i\in K$. Show that every $f(t)\in K[[t]]$ can be written as $h(s)$ for another series over $K$.
>
> Given the lambda operations of Exercise 21, the shared source setup defines the Grothendieck series
> $$
> \gamma_t(x)=\lambda_{t/(1-t)}(x)=\lambda_s(x),\qquad s=t/(1-t),
> $$
> and states that $x\mapsto\gamma_t(x)$ is a homomorphism as before. Define $\gamma^i$ by $\gamma_t(x)=\sum_i\gamma^i(x)t^i$.

## Hints

> [!hint]- Hint 1
> Solve for $b_n$ inductively: its coefficient at stage $t^n$ is multiplied by the unit $a^n$.

> [!hint]- Hint 2
> Composition by a series with zero constant term is well-defined coefficient by coefficient.

## Solution

> [!success]- Solution
> ### Approach
> Solve for $b_n$ inductively: its coefficient at stage $t^n$ is multiplied by the unit $a^n$.
>
> ### Proof
> Write $s(t)=at+a_2t^2+\cdots$, and seek $g(T)=\sum_{n\ge1}b_nT^n$. The coefficient of $t$ in $g(s(t))=t$ forces $b_1=a^{-1}$. Once $b_1,\ldots,b_{n-1}$ are chosen, the coefficient of $t^n$ is a known element plus $b_na^n$. Since $a^n$ is a unit, there is a unique $b_n$ making it zero. This constructs a unique series $g$ with $g(s(t))=t$.
>
> Substitution $H(T)\mapsto H(s(t))$ is injective: if $H$ has first nonzero coefficient $h_j$, its substituted series has first nonzero coefficient $h_ja^j$, which cannot vanish because $a$ is a unit. Substituting into $s(g(T))-T$ gives zero, using associativity of formal composition, so injectivity implies $s(g(T))=T$. Thus the two substitutions are inverses.
>
> For any $f$, put $h(T)=f(g(T))$. All compositions exist because $s$ and $g$ have zero constant terms; each coefficient is a finite sum. Then $h(s(t))=f(t)$. This also proves uniqueness of $h$.
>
> For $s=t/(1-t)$, the inverse is $t=s/(1+s)$. Substitution by $s$ is a ring homomorphism on formal series, so
> $$
> \gamma_t(x+y)=\lambda_s(x+y)=\lambda_s(x)\lambda_s(y)=\gamma_t(x)\gamma_t(y).
> $$
> Its constant term is $1$, and $\gamma^i(x)$ are the unique coefficients. No analytic convergence is used.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Lambda and Gamma Operations|Lambda and Gamma Operations]]
- [[02 - Ring Theory/Exercises/Exercise R244 - Lambda Operations as a Generating-Series Homomorphism|R244 — Lambda Operations as a Generating-Series Homomorphism]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 22, printed p. 218, PDF p. 233]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
