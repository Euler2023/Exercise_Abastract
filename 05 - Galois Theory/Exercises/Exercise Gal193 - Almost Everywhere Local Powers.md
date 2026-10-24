---
title: 'Exercise Gal193: Almost Everywhere Local Powers'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 2, printed p. 367, PDF p. 386
source_refs:
- S4/ch-VI/sec-1/ex-2
created: '2026-10-23'
---

# Exercise Gal193: Almost Everywhere Local Powers

## Problem Statement

> [!question] Neukirch VI.1.2
> Let $K$ be a number field, $m=2^\nu m'$ ($m'$ odd), and let $S$ be a finite set of primes. Let $a\in K^*$ and $a\in K_{\mathfrak p}^{*m}$, for all $\mathfrak p\notin S$. Show:
> (i) If $K(\zeta_{2^\nu})|K$ is cyclic, where $\zeta_{2^\nu}$ is a primitive $2^\nu$-th root of unity, then $a\in K^{*m}$.
> (ii) Otherwise one has at least that $a\in K^{*m/2}$.
> **Printed hint:** Use the following fact, proved in (3.8): if $L|K$ is a finite extension in which almost all prime ideals split completely, then $L=K$.

## Hints

> [!hint]- Hint 1 — first step
> Let the Galois group act on all roots of $X^m-a$ and translate the local-root hypothesis into a fixed-point condition.

> [!hint]- Hint 2 — proof route
> Study the affine action on the $m$ roots of $X^m-a$. Separate the prime-power components of $\mu_m$; only the noncyclic $2$-part can survive.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Take $M=K(\mu_m,\alpha)$ and $\alpha^m=a$. **Cited input: the existence part of the Čebotarev theorem** (Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, VII.§13, (13.4), printed p.545/PDF564): every conjugacy class occurs as Frobenius at infinitely many unramified primes. Since $X^m-a$ has a local root almost everywhere, every $g\in G=\operatorname{Gal}(M/K)$ fixes one of these roots.
> Write $g(\alpha)=\zeta^{c(g)}\alpha$ and $g(\zeta)=\zeta^{\chi(g)}$. Then
> $$
> c(gh)=c(g)+\chi(g)c(h),\qquad c(g)\in(\chi(g)-1)(\mathbb Z/m\mathbb Z).
> $$
> The latter condition says precisely that the affine permutation has a fixed point. If $\chi(g)=1$, then $c(g)=0$, so $\ker\chi$ fixes $\alpha$. Thus $M=K(\mu_m)$, and $c$ becomes a cocycle on the abelian group $G$.
> For every $\ell^e\mid m$, if $g$ acts trivially on $\mu_{\ell^e}$, the displayed condition forces $c_\ell(g)=0$. Thus $c_\ell$ factors through the image of $G$ in $(\mathbb Z/\ell^e)^\times$. At odd primes this image is cyclic. If $\ell=2$ and the cyclicity hypothesis in the exercise holds, the image is cyclic as well. For a generator $g$ of a cyclic group, the local condition gives $c_\ell(g)=(\chi(g)-1)b_\ell$; the cocycle identity then gives the same coboundary for every element. Combining the $b_\ell$ allows $\alpha$ to be adjusted to an element fixed by $G$, proving (i).
> In the noncyclic $2$-part, we have $(\mathbb Z/2^\nu)^\times=\langle-1\rangle\times\langle5\rangle$. Its noncyclic subgroups contain $-1$: otherwise, if $-1$ were absent, projection to the cyclic quotient after removing $\langle-1\rangle$ would be injective, making the subgroup cyclic. Denote the element acting as $-1$ by $\tau$. Since $c_2(\tau)\in2\mathbb Z/2^\nu$, adjust the root so that $c_2(\tau)=0$. From $g\tau=\tau g$ we obtain $2c_2(g)=0$. The odd-prime components can already be eliminated simultaneously, so the adjusted $\alpha$ satisfies $g(\alpha^2)=\alpha^2$. Hence $\alpha^2\in K$ and $a=(\alpha^2)^{m/2}$, proving (ii).

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original 200 dpi page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §1, Exercise 2, printed p. 367, PDF p. 386]. The solution is independently derived in this vault; the cited inputs do not mean that the book solves this exercise. The argument uses the Čebotarev existence theorem proved later in the book and does not claim to follow the forward chapter order of the original hint.
