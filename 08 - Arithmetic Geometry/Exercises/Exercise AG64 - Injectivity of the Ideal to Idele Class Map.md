---
title: 'Exercise AG64: Injectivity of the Ideal to Idele Class Map'
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 6, printed p. 484, PDF p. 503
source_refs:
- S4/ch-VII/sec-6/ex-6
created: '2026-10-23'
---

# Exercise AG64: Injectivity of the Ideal to Idele Class Map

## Problem Statement

> [!question] Neukirch VII.6.6
> Show that the homomorphism $c:J^{\mathfrak m}\to C(\mathfrak m)$ is injective.

## Hints

> [!hint]- Hint 1
> A representing idele for $c(\mathfrak a)$ has component $1$ at every infinite place.

> [!hint]- Hint 2
> If it is a product of a principal idele and an element of $I_f^{\mathfrak m}$, its infinite components force that principal element to be $1$. Then compare finite valuations.

## Solution

> [!success]- Independent derivation
> Use the source's exact definitions
> $$
> C(\mathfrak m)=I/(I_f^{\mathfrak m}K^*),
> \qquad I_f^{\mathfrak m}=\prod_{\mathfrak p\nmid\infty}U_{\mathfrak p}^{(n_{\mathfrak p})},
> $$
> where $U_{\mathfrak p}^{(0)}=\mathfrak o_{\mathfrak p}^*$, and the elements of $I_f^{\mathfrak m}$ have infinite components $1$. Fix uniformizers $\pi_{\mathfrak p}$. For
> $$
> \mathfrak a=\prod_{\mathfrak p\nmid\mathfrak m}\mathfrak p^{v_{\mathfrak p}(\mathfrak a)}
> $$
> the map $c$ is represented by the idele $y$ with $y_{\mathfrak p}=\pi_{\mathfrak p}^{v_{\mathfrak p}(\mathfrak a)}$ away from $\mathfrak m\infty$, and $y_{\mathfrak p}=1$ at the other places.
>
> Suppose $c(\mathfrak a)=1$. Then $y=u\alpha$ for $u\in I_f^{\mathfrak m}$ and $\alpha\in K^*$ diagonally embedded. At any infinite embedding $\tau$,
> $$
> 1=y_\tau=u_\tau\tau(\alpha)=\tau(\alpha).
> $$
> An embedding is injective, so $\tau(\alpha-1)=0$ implies $\alpha=1$. Hence $y=u$. Every finite component of $u$ is a local unit, and comparison of valuations gives $v_{\mathfrak p}(\mathfrak a)=0$ for every $\mathfrak p\nmid\mathfrak m$. The valuations at primes dividing $\mathfrak m$ are already zero by the definition of $J^{\mathfrak m}$. Therefore $\mathfrak a=\mathfrak o$, proving injectivity.
>
> For $K=\mathbb Q$, the ideal $(2)$ maps to an idele with $2$ in the $2$-component and $1$ at infinity. Dividing by the principal idele $2$ introduces the nontrivial infinite component $1/2$; it cannot be removed by $I_f^{\mathfrak m}$. This illustrates why one must not quotient out the archimedean factor in this argument.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Source status:** The exact exercise was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 6, printed p. 484, PDF p. 503]. The definitions of $I_f^{\mathfrak m}$ and $C(\mathfrak m)$ and the map $c$ were checked at [printed pp. 480–481, PDF pp. 499–500].
- **Proof scope:** Independent kernel argument. It depends on retaining the infinite components in $C(\mathfrak m)$; the analogous map into a ray class group need not be injective.
