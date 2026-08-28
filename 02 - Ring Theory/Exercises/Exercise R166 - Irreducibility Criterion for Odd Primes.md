---
title: "Exercise R166: Irreducibility Criterion for Odd Primes"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-splitting
  - quadratic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.4, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R166: Irreducibility Criterion for Odd Primes

## Problem Statement

> [!question] Exercise 6.4
> When $d$ is congruent $2$ or $3$ modulo $4$, an integer prime $p$ remains prime in the ring of integers of $\mathbb Q[\sqrt d]$ if the polynomial $x^2-d$ is irreducible modulo $p$.
>
> **(a)** Prove that this is also true when $d\equiv1$ modulo $4$ and $p\neq2$.
>
> **(b)** What happens to $p=2$ when $d\equiv1$ modulo $4$?

## Hints

> [!hint]- Hint 1
> Put $\eta=(1+\sqrt d)/2$ and compare $x^2-x+(1-d)/4$ with $x^2-d$ by the invertible change of variable $x=2t-1$ modulo an odd prime.

## Solution

> [!success]- Solution
> Let
>
> $$
> \eta=\frac{1+\sqrt d}{2},
> \qquad
> h=\frac{1-d}{4}.
> $$
>
> Then $R=\mathbb Z[\eta]$ and
>
> $$
> R/(p)\cong\mathbb F_p[t]/(t^2-t+h).
> $$
>
> **(a)** For odd $p$, multiplication by $2$ is invertible, and
>
> $$
> (2t-1)^2-d=4(t^2-t+h).
> $$
>
> Thus $t^2-t+h$ has a root modulo $p$ exactly when $x^2-d$ has a root, under $x=2t-1$. Since both are quadratic, one is irreducible exactly when the other is. Therefore $(p)$ is prime exactly when $x^2-d$ is irreducible modulo $p$.
>
> **(b)** At $p=2$ the change of variable is not invertible, and
>
> $$
> x^2-d\equiv x^2-1=(x+1)^2\pmod2
> $$
>
> for every odd $d$. So this polynomial alone cannot distinguish the behavior of $2$. The correct polynomial is $t^2-t+h$:
>
> $$
> \begin{cases}
> d\equiv5\pmod8 &\Longrightarrow t^2+t+1\text{ irreducible, so }2\text{ remains prime},\\
> d\equiv1\pmod8 &\Longrightarrow t(t+1),\text{ so }2\text{ splits}.
> \end{cases}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because polynomial irreducibility is used as a residue-ring test for primality of $(p)$.
- **Characteristic-two boundary:** The failure at $p=2$ is caused precisely by the noninvertibility of the affine change of variable.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.4, printed p. 410, PDF p. 422]. The polynomial identity and modulo-$8$ conclusion are independent.
