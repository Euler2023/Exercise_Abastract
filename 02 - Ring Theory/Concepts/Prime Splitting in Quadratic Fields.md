---
title: Prime Splitting in Quadratic Fields
aliases:
  - Inert Split and Ramified Primes
  - Quadratic Prime Splitting
topic: ring-theory
tags:
  - concept
  - ring-theory
  - prime-ideals
  - quadratic-fields
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §§13.5–13.6, printed pp. 393–396, PDF pp. 405–408"
source_status: partially-verified
status: not-started
---

# Prime Splitting in Quadratic Fields

## Definition

Let $K=\mathbb Q(\sqrt d)$ be a quadratic number field with ring of integers $R=\mathcal O_K$, and let $p$ be a rational prime. The ideal $(p)$ has one of three behaviors:

> [!info] Inert
> $(p)$ is itself a prime ideal. Then $R/(p)$ is the field $\mathbb F_{p^2}$.

> [!info] Split
> There are two distinct conjugate prime ideals with
>
> $$
> (p)=P\overline P.
> $$
>
> In the unramified split case, $R/(p)\cong\mathbb F_p\times\mathbb F_p$.

> [!info] Ramified
> A conjugation-stable prime ideal occurs twice:
>
> $$
> (p)=P^2.
> $$

## Polynomial Criterion

If $d\equiv2$ or $3\pmod4$, then $R=\mathbb Z[\delta]$ with $\delta^2=d$, and

$$
R/(p)\cong\mathbb F_p[x]/(x^2-d).
$$

Thus $p$ is inert when $x^2-d$ is irreducible, split when it has two distinct roots, and ramified when it has a repeated root. If $a^2\equiv d\pmod p$, a prime factor is

$$
P=(p,a+\delta),
$$

with the sign chosen according to the desired root.

If $d\equiv1\pmod4$, set

$$
\eta=\frac{1+\sqrt d}{2},
\qquad
h=\frac{1-d}{4}.
$$

Then $R=\mathbb Z[\eta]$ and the controlling polynomial is $x^2-x+h$. For odd $p$, the substitution $2x-1$ identifies its root behavior with that of $x^2-d$. The prime $2$ must be handled separately.

## Ramification and Representation by the Norm

For $d\equiv2$ or $3\pmod4$, a rational prime ramifies exactly when $p=2$ or $p\mid d$. A representation

$$
p=a^2-b^2d=N(a+b\sqrt d)
$$

is equivalent to a prime ideal factor of $(p)$ being principal: if $\alpha=a+b\sqrt d$, then

$$
(p)=(\alpha)(\overline\alpha).
$$

This is stronger than merely saying that $p$ splits; the class of the prime ideal must also be trivial.

## Example

For $R=\mathbb Z[\sqrt{-14}]$, the primes $2$ and $7$ ramify, $3$, $5$, and $13$ split, and $11$ is inert. These conclusions follow by checking whether $-14$ is zero, a nonzero square, or a nonsquare modulo each prime.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The three-way ideal behavior and polynomial criteria were checked against [S1, Ch. 13, §§13.5–13.6, printed pp. 393–396, PDF pp. 405–408]. The norm-representation interpretation and the $d=-14$ summary are direct consequences recorded independently.
