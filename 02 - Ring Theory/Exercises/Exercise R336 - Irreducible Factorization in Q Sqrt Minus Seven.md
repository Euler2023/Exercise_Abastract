---
title: "Exercise R336: Irreducible Factorization in Q Sqrt Minus Seven"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 1, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R336: Irreducible Factorization in Q Sqrt Minus Seven

## Problem Statement

> [!question] Neukirch I.3.1
> Decompose $33+11\sqrt{-7}$ into irreducible integral elements of $\mathbb Q(\sqrt{-7})$.

## Hints

> [!hint]- Hint 1: Use the full integer ring
> Since $-7\equiv1\pmod4$, work in $\mathcal O_K=\mathbb Z[\omega]$, where $\omega=(1+\sqrt{-7})/2$. Its conjugate satisfies $\omega\overline\omega=2$. A factorization in the smaller ring $\mathbb Z[\sqrt{-7}]$ can miss these factors of $2$.

> [!hint]- Hint 2: Separate the rational factor $11$
> The identity $11=(2+\sqrt{-7})(2-\sqrt{-7})$ gives factors of prime norm. Also write $33+11\sqrt{-7}=22(1+\omega)$.

> [!hint]- Hint 3: Factor the remaining element of norm $4$
> From $\omega^2-\omega+2=0$ and $\overline\omega=1-\omega$, calculate $\overline\omega^{\,2}=-(1+\omega)$. Use norms to prove that every resulting nonunit factor is irreducible.

## Solution

> [!success]- Independent derivation
> Put $s=\sqrt{-7}$, $K=\mathbb Q(s)$, and $\omega=(1+s)/2$. The quadratic integer-ring calculation in [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333, Step 3]] gives
> $$
> \mathcal O_K=\mathbb Z[\omega]
> =\left\{\frac{a+bs}{2}:a,b\in\mathbb Z,\ a\equiv b\pmod2\right\}.
> $$
> In particular, the relevant ring is the full integer ring, rather than only $\mathbb Z[s]$.
>
> **1. Norms, units, and an irreducibility test.** Complex conjugation gives the multiplicative norm
> $$
> N\left(\frac{a+bs}{2}\right)
> =\frac{a^2+7b^2}{4}.
> $$
> This is a positive integer for each nonzero element of $\mathcal O_K$. Integrality follows either from the parity condition or from the fact that the norm of an algebraic integer is an integer. An element $u\in\mathcal O_K$ is a unit if and only if $N(u)=1$: a unit and its inverse have positive integer norms whose product is $1$, while $N(u)=1$ gives $u^{-1}=\overline u\in\mathcal O_K$.
>
> The equation $a^2+7b^2=4$ forces $b=0$ and $a=\pm2$. Therefore
> $$
> \mathcal O_K^\times=\{1,-1\}.
> $$
> If an element has norm equal to a positive rational prime $q$, a factorization into two nonunits would express $q$ as a product of two integers at least $2$. This is impossible. Thus prime norm is sufficient for irreducibility here.
>
> **2. Produce the factors.** We have
> $$
> \omega+\overline\omega=1,\qquad
> \omega\overline\omega=2,\qquad
> \omega^2=\omega-2.
> $$
> Consequently,
> $$
> \overline\omega^{\,2}=(1-\omega)^2
> =1-2\omega+(\omega-2)=-1-\omega.
> $$
> On the other hand,
> $$
> (2+s)(2-s)=4-s^2=11.
> $$
> Since $3+s=2(1+\omega)$, these identities give
> $$
> \begin{aligned}
> 33+11s
> &=22(1+\omega)\\
> &=-22\overline\omega^{\,2}\\
> &=-\omega\overline\omega^{\,3}(2+s)(2-s).
> \end{aligned}
> $$
> Thus one requested decomposition, with its unit factor displayed, is
> $$
> 33+11\sqrt{-7}
> =-\frac{1+\sqrt{-7}}2
> \left(\frac{1-\sqrt{-7}}2\right)^3
> (2+\sqrt{-7})(2-\sqrt{-7}).
> $$
>
> **3. Verify irreducibility of every factor.** All the factors belong to $\mathcal O_K$, and
> $$
> N(\omega)=N(\overline\omega)=2,
> \qquad N(2+s)=N(2-s)=11.
> $$
> The numbers $2$ and $11$ are rational primes, so all six factors, counting the three occurrences of $\overline\omega$, are irreducible by Step 1. The initial $-1$ is a unit. The norm of the product is $2^4\cdot11^2=1936$, agreeing with $33^2+7\cdot11^2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Source status:** [S4, Ch. I, §3, Exercise 1, printed p. 23, PDF p. 42]. The coefficient $33+11\sqrt{-7}$ and the instruction to factor into irreducible integral elements were checked on the rendered original page. No source figure is needed.
- **Proof inputs:** The full quadratic integer-ring formula is imported from the complete independent proof in [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333]]. Conjugation preserves the integer ring, and its product defines a multiplicative norm. The unit calculation, factorization, and irreducibility checks above are independent derivations.
- **Proof boundary:** This solution supplies a factorization and proves every displayed nonunit factor irreducible. It does not assume or need unique factorization, a principal ideal theorem, or Euclideanity of $\mathcal O_K$. A rational prime need not be an irreducible element of the integer ring: here $2=\omega\overline\omega$ and $11=(2+s)(2-s)$ are both reducible.
- **Routing:** Ring Theory is primary because divisibility, units, and irreducible factorizations do the main work; the quadratic field and its integral basis supply the setting.
