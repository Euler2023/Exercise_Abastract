---
title: "Exercise R139: Prime-Power Cyclotomic Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - cyclotomic-polynomials
  - eisenstein-criterion
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.18, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R139: Prime-Power Cyclotomic Polynomials

## Problem Statement

> [!question] Exercise 4.18
> Let $q=p^e$ with $p$ prime, and let $r=p^{e-1}$. Prove that the cyclotomic polynomial
>
> $$
> \frac{x^q-1}{x^r-1}
> $$
>
> is irreducible.

## Hints

> [!hint]- Hint 1
> Write the quotient as $1+x^r+\cdots+x^{(p-1)r}$ and substitute $x+1$.

> [!hint]- Hint 2
> Reduce the translated polynomial modulo $p$ and use the Frobenius identity; its constant term before reduction is exactly $p$.

## Solution

> [!success]- Solution
> Put
>
> $$
> \Phi(x)=\frac{x^{p^e}-1}{x^{p^{e-1}}-1}
> =\sum_{j=0}^{p-1}x^{jr}.
> $$
>
> We show that $\Phi(x+1)$ is Eisenstein at $p$. In $\mathbb F_p[x]$, the Frobenius identity and the fact that $r$ is a power of $p$ give
>
> $$
> (x+1)^r=x^r+1.
> $$
>
> Therefore
>
> $$
> \begin{aligned}
> \Phi(x+1)
> &\equiv\sum_{j=0}^{p-1}(x^r+1)^j\\
> &=\frac{(x^r+1)^p-1}{x^r}\\
> &=\frac{x^{rp}}{x^r}
> =x^{q-r}
> \pmod p.
> \end{aligned}
> $$
>
> Thus every nonleading coefficient of $\Phi(x+1)$ is divisible by $p$. Its constant coefficient is
>
> $$
> \Phi(1)=\underbrace{1+\cdots+1}_{p\text{ terms}}=p,
> $$
>
> which is not divisible by $p^2$. The leading coefficient is $1$. Eisenstein's criterion proves that $\Phi(x+1)$ is irreducible over $\mathbb Q$. Translation by $1$ is an automorphism of $\mathbb Q[x]$, so $\Phi(x)$ is irreducible as well.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because translation and Eisenstein's criterion prove polynomial irreducibility; the polynomial's cyclotomic interpretation is the cross-topic context.
- **Hypotheses:** Here $e\ge1$, so $r=p^{e-1}$ is an integer and the quotient is $\Phi_{p^e}(x)$.
- **Source status:** The starred problem is from [S1, Ch. 12, §12.4, Ex. 4.18, printed p. 381, PDF p. 393]. The proof is independent.

