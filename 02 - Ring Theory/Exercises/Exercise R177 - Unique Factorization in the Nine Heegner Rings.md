---
title: "Exercise R177: Unique Factorization in the Nine Heegner Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - unique-factorization
  - class-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 8, Computing the Class Group, Ex. 8.4, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R177: Unique Factorization in the Nine Heegner Rings

## Problem Statement

> [!question] Exercise 8.4
> Prove that the values of $d$ listed in Theorem 13.2.5 have unique factorization.

## Hints

> [!hint]- Hint 1
> Use the class-group bound from Section 13.8: it suffices to inspect rational primes below $\mu$, where $\mu=2\sqrt{|d|/3}$ for $d\equiv2,3\pmod4$ and $\mu=\sqrt{|d|/3}$ for $d\equiv1\pmod4$.

> [!hint]- Hint 2
> For $d=-19,-43,-67,-163$, test the irreducibility of $x^2-x+(1-d)/4$ modulo the required small primes.

## Solution

> [!success]- Solution
> Theorem 13.2.5 lists
>
> $$
> d=-1,-2,-3,-7,-11,-19,-43,-67,-163.
> $$
>
> The class-group bound in Section 13.8 says that the classes of prime ideals above rational primes $p<\mu$ generate the class group, where
>
> $$
> \mu=
> \begin{cases}
> 2\sqrt{|d|/3},&d\equiv2,3\pmod4,\\
> \sqrt{|d|/3},&d\equiv1\pmod4.
> \end{cases}
> $$
>
> For $d=-1,-2,-3,-7,-11$, there is no rational prime $p<\mu$. Hence the class group is trivial.
>
> For the remaining four values, $d\equiv1\pmod4$ and
>
> $$
> R=\mathbb Z[\eta],
> \qquad
> \eta^2-\eta+\frac{1-d}{4}=0.
> $$
>
> The only primes that need inspection are
>
> $$
> \begin{array}{c|c|c}
> d&\mu&\text{primes }p<\mu\\ \hline
> -19&\sqrt{19/3}&2\\
> -43&\sqrt{43/3}&2,3\\
> -67&\sqrt{67/3}&2,3\\
> -163&\sqrt{163/3}&2,3,5,7.
> \end{array}
> $$
>
> Put $f_d(x)=x^2-x+(1-d)/4$. Direct reduction gives:
>
> - for $d=-19$, $f_d$ has no root modulo $2$;
> - for $d=-43$ and $d=-67$, $f_d$ has no root modulo $2$ or $3$;
> - for $d=-163$, its discriminant $d$ is a nonsquare modulo $3$, $5$, and $7$, while its reduction modulo $2$ is $x^2+x+1$.
>
> Thus every prime below the relevant bound remains prime and contributes no nontrivial ideal-class generator. In every listed case the class group is trivial. Since the ring of integers of a number field is a Dedekind domain, trivial class group is equivalent to every ideal being principal, hence to unique factorization of elements. Therefore all nine rings are unique factorization domains.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because triviality of the ideal class group proves unique factorization.
- **Method boundary:** This proves the unique-factorization direction for the nine displayed values. It does not prove that no other negative square-free $d$ works; Artin attributes that much deeper converse to Baker, Heegner, and Stark.
- **Source status:** The exercise is from [S1, Ch. 13, §13.8, Ex. 8.4, printed p. 410, PDF p. 422]. The class-bound calculation and modular checks are independent, using results developed earlier in Artin's chapter.
