---
title: "Exercise R333: Integral Bases and Discriminants of Quadratic Number Fields"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 4, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R333: Integral Bases and Discriminants of Quadratic Number Fields

## Problem Statement

> [!question] Neukirch I.2.4
> Let $D$ be a squarefree rational integer $\ne0,1$ and $d$ the discriminant of the quadratic number field $K=\mathbb Q(\sqrt D)$. Show that
> $$
> d=\begin{cases}
> D,&D\equiv1\pmod4,\\
> 4D,&D\equiv2\text{ or }3\pmod4,
> \end{cases}
> $$
> and that an integral basis of $K$ is given by $\{1,\sqrt D\}$ in the second case, by $\{1,\tfrac12(1+\sqrt D)\}$ in the first case, and by $\{1,\tfrac12(d+\sqrt d)\}$ in both cases.

## Hints

> [!hint]- Hint 1
> For $x=a+b\sqrt D$, calculate its trace $2a$ and norm $a^2-Db^2$. Integrality forces both to be integers; in degree two the converse also holds.

> [!hint]- Hint 2
> Write $m=2a$. The equation $D(2b)^2=m^2-4N(x)$ and squarefreeness force $n=2b$ to be an integer. Now use $m^2-Dn^2\equiv0\pmod4$.

> [!hint]- Hint 3
> For a basis $\{1,\omega\}$, the embedding determinant gives discriminant $(\omega-\overline\omega)^2$. Compare the proposed uniform generator with the basis already obtained.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **1. Reduce integrality to integer trace and norm.**
> Every $x\in K$ has a unique expression $x=a+b\sqrt D$, with $a,b\in\mathbb Q$. Its conjugate is $\overline x=a-b\sqrt D$, so
> $$
> T(x)=2a,\qquad N(x)=a^2-Db^2.
> $$
> If $x$ is integral, its conjugate is integral, and their sum and product are rational algebraic integers. A rational algebraic integer is an integer: if $r/s$ is in lowest terms and satisfies a monic integer equation, multiplying by the appropriate power of $s$ gives $s\mid r^k$, whence $s=1$. Thus $T(x),N(x)\in\mathbb Z$. Conversely, these two conditions make $x$ a root of the monic integer polynomial $X^2-T(x)X+N(x)$, even when $b=0$.
>
> **2. Determine the possible denominators.**
> Let $x$ be integral and put $m=2a\in\mathbb Z$. Then
> $$
> D(2b)^2=m^2-4N(x)\in\mathbb Z.
> $$
> Write $2b=r/s$ with $r,s\in\mathbb Z$, $s>0$, and $\gcd(r,s)=1$. The last relation implies $s^2\mid Dr^2$, hence $s^2\mid D$. Because $D$ is squarefree, this forces $s=1$. Therefore $n=2b\in\mathbb Z$ and
> $$
> x=\frac{m+n\sqrt D}{2},\qquad m^2-Dn^2\equiv0\pmod4.
> $$
> Conversely, any integers $m,n$ satisfying this congruence give integer trace $m$ and integer norm $(m^2-Dn^2)/4$, hence an algebraic integer.
>
> **3. Obtain the full integer ring and its basis.**
> Squares modulo $4$ are $0$ and $1$. Since $D$ is squarefree, it has residue $1$, $2$, or $3$ modulo $4$.
>
> If $D\equiv2$ or $3\pmod4$, odd $n$ would require $m^2\equiv2$ or $3\pmod4$, which is impossible. Thus $n$ is even, and then $m$ is even. It follows, in both directions, that
> $$
> \mathcal O_K=\mathbb Z\oplus\mathbb Z\sqrt D.
> $$
> If $D\equiv1\pmod4$, the congruence is equivalent to $m\equiv n\pmod2$. Setting $\omega=(1+\sqrt D)/2$, we have
> $$
> \frac{m+n\sqrt D}{2}=\frac{m-n}{2}+n\omega,
> \qquad \mathcal O_K=\mathbb Z\oplus\mathbb Z\omega.
> $$
> In each case the two displayed generators are linearly independent over $\mathbb Q$, because $D$ is not a rational square. They therefore express every integer uniquely with integer coefficients, as required of an integral basis.
>
> **4. Compute the field discriminant.**
> For an integral basis $\{1,\omega\}$ the two embeddings give
> $$
> d_K=\det\begin{pmatrix}1&\omega\\1&\overline\omega\end{pmatrix}^{\!2}
> =(\omega-\overline\omega)^2.
> $$
> With $\omega=\sqrt D$ this is $4D$; with $\omega=(1+\sqrt D)/2$ it is $D$. These are discriminants of the full integer ring, because Step 3 established the integral bases, rather than merely rational bases.
>
> **5. Verify the uniform basis.**
> Choose the square roots compatibly. If $d=D$, then
> $$
> \frac{d+\sqrt d}{2}=\frac{1+\sqrt D}{2}+\frac{D-1}{2}.
> $$
> Here $(D-1)/2\in\mathbb Z$. If $d=4D$, take $\sqrt d=2\sqrt D$, obtaining
> $$
> \frac{d+\sqrt d}{2}=2D+\sqrt D.
> $$
> Adding an integer to the second vector preserves the integer span and uniqueness of coordinates. Thus $\{1,(d+\sqrt d)/2\}$ is an integral basis in both cases. Changing the sign of the chosen square root also preserves the integer span.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Source status:** [S4, Ch. I, §2, Exercise 4, printed p. 15, PDF p. 34]. All three proposed bases, including $(d+\sqrt d)/2$, were checked against the original page image. The exercise applies to both positive and negative squarefree $D$; no source figure is needed.
- **Proof inputs:** Closure of integral elements under sums and products is proved after Proposition (2.2) in [S4, printed pp. 6–7, PDF pp. 25–26]. Trace and norm integrality is explained in [S4, printed p. 12, PDF p. 31]. The embedding discriminant is defined in [S4, printed p. 11, PDF p. 30]; the field discriminant is defined on printed p. 15 / PDF p. 34. The denominator, parity, basis, and discriminant calculations above are independent derivations.
- **Routing:** Ring Theory is primary because determining the integral closure and allowable denominators does the main work. The determinant is a subsequent calculation; field conjugation and free modules are cross-topic prerequisites.
- **Notation:** $D$ is the squarefree radicand, while $d=d_K$ is the field discriminant. They agree only when $D\equiv1\pmod4$. An integral basis is a $\mathbb Z$-basis of $\mathcal O_K$, not merely a $\mathbb Q$-basis of $K$.
