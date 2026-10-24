---
title: "Exercise LA543: Localization of Modules over Rings with Zero Divisors"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §11, Exercise 1, printed p. 71, PDF p. 90"
created: 2026-10-20
---

# Exercise LA543: Localization of Modules over Rings with Zero Divisors

## Problem Statement

> [!question] Neukirch I.11.1
> Let $A$ be an arbitrary ring, not necessarily an integral domain, let $M$ be an $A$-module and $S$ a multiplicatively closed subset of $A$ such that $0\notin S$. In $M\times S$ consider the equivalence relation
> $$
> (m,s)\sim(m',s')\quad\Longleftrightarrow\quad
> \exists s''\in S\text{ such that }s''(s'm-sm')=0.
> $$
> Show that the set $M_S$ of equivalence classes $\overline{(m,s)}$ forms an $A$-module and that $M\to M_S$, $a\mapsto\overline{(a,1)}$, is a homomorphism. In particular, $A_S$ is a ring. It is called the localization of $A$ with respect to $S$.

## Hints

> [!hint]- Hint 1: Keep the extra annihilating factor
> For transitivity, if witnesses $t,u\in S$ compare $(m_0,s_0)$ to $(m_1,s_1)$ and then to $(m_2,s_2)$, multiply the desired difference by $tu s_1$. Do not cancel a possibly zero-divisor denominator.

> [!hint]- Hint 2: Define fraction operations
> Use $m/s+n/t=(tm+sn)/(st)$ and $a(m/s)=am/s$. Check that equivalent inputs yield equivalent outputs by multiplying their witnesses.

> [!hint]- Hint 3: Use the same construction for the ring
> For $M=A$, define $(a/s)(b/t)=ab/(st)$ and unit $1/1$. The same witness calculations give well-defined multiplication. The map from $M$ is $m\mapsto m/1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> We use commutative rings with identity and unital modules, and take $1\in S$, as is implicit in the printed map to $(a,1)$. If a multiplicatively closed set was given without $1$, adjoining $1$ gives this convention.
>
> **1. Verify the equivalence relation.** Reflexivity uses the witness $1$; symmetry changes only a sign. For transitivity suppose
> $$
> t(s_1m_0-s_0m_1)=0,\qquad
> u(s_2m_1-s_1m_2)=0,
> \quad t,u\in S.
> $$
> Then
> $$
> tu s_1(s_2m_0-s_0m_2)
> =tu\bigl(s_2(s_1m_0-s_0m_1)+s_0(s_2m_1-s_1m_2)\bigr)=0.
> $$
> The witness $tu s_1$ belongs to $S$, proving transitivity. Write $m/s$ for the resulting class.
>
> **2. Define and check the module operations.** Put
> $$
> \frac m s+\frac n t=\frac{tm+sn}{st},\qquad
> a\frac m s=\frac{am}{s}\quad(a\in A).
> $$
> Suppose $m/s=m'/s'$ and $n/t=n'/t'$ with witnesses $u,v\in S$. The cross-difference for the proposed sums is
> $$
> s't'(tm+sn)-st(t'm'+s'n')
> =tt'(s'm-sm')+ss'(t'n-tn').
> $$
> Multiplication by $uv$ kills it, so addition is independent of representatives. Multiplication by $a$ preserves the first annihilating relation, so the scalar action is also well-defined.
>
> The zero is $0/1$ and the negative of $m/s$ is $(-m)/s$. Both associations of a sum of three fractions have the common representative
> $$
> \frac{tu m+su n+st p}{stu}.
> $$
> Commutativity follows from the addition formula. The equations $(a+b)(m/s)=a(m/s)+b(m/s)$ and $a(m/s+n/t)=a(m/s)+a(n/t)$ follow by using the common denominators $s^2$ and $st$, respectively; multiplication of a numerator and denominator by an element of $S$ preserves its class. The identities $(ab)(m/s)=a(b(m/s))$ and $1(m/s)=m/s$ are immediate equalities of representatives. Thus $M_S$ is an $A$-module.
>
> The map $m\mapsto m/1$ respects addition and scalar multiplication by these formulas. It need not be injective; the exact vanishing test is
> $$
> \frac m s=0\quad\Longleftrightarrow\quad
> tm=0\text{ for some }t\in S.
> $$
> This follows directly by comparing $(m,s)$ with $(0,1)$.
>
> **3. Construct the localized ring.** For $M=A$, use the addition above and put
> $$
> \frac a s\frac b t=\frac{ab}{st}.
> $$
> If $a/s=a'/s'$ and $b/t=b'/t'$ with witnesses $u,v$, then
> $$
> s't'ab-sta'b'
> =t'b(s'a-sa')+sa'(t'b-tb')
> $$
> is killed by $uv$. Thus multiplication is well-defined. Its associativity, commutativity, unit $1/1$, and distributivity follow by representing the two sides over a common denominator and using the corresponding ring identities in $A$. The map $A\to A_S$ is a unital ring homomorphism, and $s/1$ has inverse $1/s$ for every $s\in S$.
>
> In fact $M_S$ is naturally an $A_S$-module by $(a/r)(m/s)=am/(rs)$. For changes of representatives the cross-difference is
> $$
> r's'am-rsa'm'=s'm(r'a-ra')+ra'(s'm-sm'),
> $$
> which is killed by the product of the two witnesses. This supplies the stronger scalar structure without any cancellation in $A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked at [S4, Ch. I, §11, Exercise 1, printed p. 71, PDF p. 90]. No source figure is required. The solution is an independent derivation.
- **Conventions:** The source works with commutative rings and identity. The assumption $1\in S$ makes its printed canonical map meaningful. The extra factor in the equivalence relation is essential when $A$ or $M$ has torsion; this proof never cancels it.
- **Example and scope:** In $A=\mathbb Z/6\mathbb Z$ with $S=\{1,2,4\}$, the nonzero element $3$ maps to zero because $2\cdot3=0$. No finite-generation hypothesis on $M$ is used.
- **Routing:** Constructing the module operations, their well-definedness, and the canonical linear map is primary, so Linear Algebra and Modules is the destination.
