---
title: 'Exercise Gal181: Unramified First Cohomology'
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 1, printed p. 325, PDF p. 344
source_refs:
- S4/ch-V/sec-1/ex-1
created: '2026-10-23'
---

# Exercise Gal181: Unramified First Cohomology

## Problem Statement

> [!question] Neukirch V.1.1
> For the Galois group $\Gamma=G(\widetilde K/K)$, one has canonically
> $$
> H^1(\Gamma,\mathbb Z/n\mathbb Z)\cong\mathbb Z/n\mathbb Z\qquad\text{and}\qquad H^1(\Gamma,\mu_n)=U_KK^{*n}/K^{*n},
> $$
> the latter provided that $n$ is not divisible by the residue characteristic.
>
> The exercises 1–3 presuppose exercises 4–8 of chap. IV, §3.

## Hints

> [!hint]- Hint 1
> Identify $\Gamma$ with $\widehat{\mathbb Z}$ using arithmetic Frobenius.

> [!hint]- Hint 2
> Under Kummer theory an unramified class is represented by an element whose $n$-th root belongs to $\widetilde K$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The action on $\mathbb Z/n\mathbb Z$ is trivial. Thus continuous cocycles are continuous homomorphisms, and coboundaries vanish. Evaluation at the arithmetic Frobenius $\varphi_K$ gives a bijection to $\mathbb Z/n\mathbb Z$: the inverse sends $c$ to $m\mapsto mc$ on $\widehat{\mathbb Z}$.
>
> Assume $(n,p)=1$. Inflation–restriction and Kummer theory identify $H^1(\Gamma,\mu_n)$ with the kernel of
> $$
> K^*/K^{*n}\longrightarrow\widetilde K^*/\widetilde K^{*n}.
> $$
> Here inertia fixes $\mu_n$, because all prime-to-$p$ roots of unity are unramified. If $a=b^n$ in $\widetilde K$, the value group of $\widetilde K$ is $\mathbb Z$, so $v_K(a)=n v(b)$ is divisible by $n$. Therefore $a$ represents a unit modulo $K^{*n}$.
>
> Conversely, for $u\in U_K$ choose a finite residue-field extension containing all roots of $X^n-\bar u$. Its roots are nonzero and simple. In the corresponding finite unramified extension, Hensel's lemma lifts those roots, so $u$ is an $n$-th power in $\widetilde K$. The kernel is exactly $U_KK^{*n}/K^{*n}$, as asserted.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §1, Exercise 1, printed p. 325, PDF p. 344]. Independent derivation using inflation–restriction and Kummer theory from IV §3 Exercises 4 and 8. Arithmetic Frobenius is the convention verified in V §1, printed p. 320, PDF p. 339.
