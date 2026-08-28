---
title: "Exercise R149: Splitting of Rational Primes in the Eisenstein Integers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - eisenstein-integers
  - prime-splitting
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.9, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R149: Splitting of Rational Primes in the Eisenstein Integers

## Problem Statement

> [!question] Exercise 5.9
> Let $R=\mathbb Z[\omega]$, where $\omega=e^{2\pi i/3}$. Let $p$ be an integer prime different from $3$. Adapt the proof of Theorem 12.5.2 to prove the following:
>
> **(a)** The polynomial $x^2+x+1$ has a root in $\mathbb F_p$ if and only if $p\equiv1\pmod3$.
>
> **(b)** $(p)$ is a maximal ideal of $R$ if and only if $p\equiv-1\pmod3$.
>
> **(c)** $p$ factors in $R$ if and only if it can be written in the form
>
> $$
> p=a^2+ab+b^2
> $$
>
> for some integers $a$ and $b$.

## Hints

> [!hint]- Hint 1
> A root of $x^2+x+1$ is a nontrivial cube root of unity in $\mathbb F_p^\times$.

> [!hint]- Hint 2
> Use $R/(p)\cong\mathbb F_p[x]/(x^2+x+1)$ and the norm $N(a-b\omega)=a^2+ab+b^2$.

## Solution

> [!success]- Solution
> **(a)** Since $p\neq3$, a root $\lambda$ of $x^2+x+1$ satisfies
>
> $$
> \lambda^3=1,\qquad \lambda\neq1.
> $$
>
> Thus $\lambda$ has order $3$ in the cyclic group $\mathbb F_p^\times$, whose order is $p-1$. Such an element exists exactly when $3\mid p-1$, namely when $p\equiv1\pmod3$.
>
> **(b)** The presentation $R\cong\mathbb Z[x]/(x^2+x+1)$ gives
>
> $$
> R/(p)\cong
> \mathbb F_p[x]/(x^2+x+1).
> $$
>
> The ideal $(p)$ is maximal exactly when this quotient is a field, equivalently when the quadratic is irreducible. By part (a), and because $p\neq3$, irreducibility occurs exactly when $p\not\equiv1\pmod3$, or
>
> $$
> p\equiv-1\pmod3.
> $$
>
> **(c)** Suppose $p$ factors properly in the Euclidean domain $R$, say $p=\alpha\beta$ with both factors nonunits. Norms give
>
> $$
> p^2=N(\alpha)N(\beta).
> $$
>
> Both norms are integers greater than $1$, so each equals $p$. Write $\alpha=u+v\omega$ and set $a=u$, $b=-v$. Then
>
> $$
> p=N(\alpha)=u^2-uv+v^2=a^2+ab+b^2.
> $$
>
> Conversely, if $p=a^2+ab+b^2$, then
>
> $$
> p=N(a-b\omega)
> =(a-b\omega)(a-b\overline\omega).
> $$
>
> Neither factor is a unit because its norm is $p>1$, so this is a proper factorization in $R$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Routing:** Ring Theory is primary because quotient rings, norms, and element factorization carry the proof; the finite cyclic group is the key cross-topic input.
- **Excluded prime:** At $p=3$, the polynomial has a repeated root and $3$ ramifies, so the stated dichotomy deliberately excludes it.
- **Source status:** The starred problem is from [S1, Ch. 12, §12.5, Ex. 5.9, printed p. 381, PDF p. 393]. The proof is independent.

