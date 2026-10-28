---
title: "Exercise F148: Ordinary and Supersingular Reduction of Two Cubics"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.6, printed pp. 332\u2013333, PDF pp. 345\u2013346"
source_refs:
  - "S7/ch-8/sec-3/ex-6"
created: 2026-10-28
---

# Exercise F148: Ordinary and Supersingular Reduction of Two Cubics

## Problem Statement

> [!question] Original Exercise 8.3.6
> (a) Show that $E:y^2=x^3-1$ is in global minimal form and has good reduction at all $p>3$. Determine its reduction types at $2$ and $3$. (Hints are at the end of the book.)
>
> (b) For a prime $p\equiv2\pmod3$, show cubing is an automorphism of $\mathbb F_p^*$, and $x\mapsto x^3-1$ bijects $\mathbb F_p$. Count $\#\widetilde E(\mathbb F_p)=p+1$, i.e. $a_p(E)=0$. Thus $E$ has supersingular reduction by Proposition 8.3.3.
>
> (c) More generally let $p$ be odd and $E:y^2=f(x)$ elliptic over $\mathbb F_p$. Use cyclicity of $\mathbb F_p^*$ to show the number of ordinates at $x$ is $1+f(x)^{(p-1)/2}$, interpreting the power as $-1,0,1\in\mathbb Z$. Deduce
> $$
> \#E(\mathbb F_p)=1+p+\sum_{x\in\mathbb F_p}f(x)^{(p-1)/2}\equiv1+\sum_xf(x)^{(p-1)/2}\pmod p.
> $$
> Show $\sum_xx^i=0$ for $i=0$ or $i\not\equiv0\pmod{p-1}$, and equals $-1$ for $i>0$ divisible by $p-1$. Conclude that only the $x^{p-1}$ term in $f(x)^{(p-1)/2}$ contributes.
>
> (d) For $y^2=x^3-1$ and $p>3$, $p\equiv1\pmod3$, show
> $$
> \#\widetilde E(\mathbb F_p)\equiv1-(-1)^{(p-1)/6}\binom{(p-1)/2}{(p-1)/3}\not\equiv1\pmod p.
> $$
> Thus $a_p(E)\not\equiv0\pmod p$, so the reduction is ordinary.
>
> (e) Show $y^2=x^3-x$ is in global minimal form with bad reduction only at $2$; decide whether that reduction is multiplicative or additive. Use (c) to classify its good reduction at every $p>2$ by $p\pmod4$.

> **Context and notation.** Good reduction is classified as ordinary or supersingular; bad nodal reduction is multiplicative and bad cuspidal reduction is additive. For a good prime, $a_p=p+1-\#\widetilde E(\mathbb F_p)$. In (c), $f$ is the cubic in a Weierstrass equation.

> [!warning] Source issue
> Part (b) includes $p=2$ in its congruence class, but the supersingular conclusion requires good reduction. Part (a) shows that $2$ is additive. Restrict the supersingular assertion to good primes $p>3$; the elementary point count at $2$ remains valid.

## Hints

> [!hint]- Hint 1
> The discriminant valuations are less than twelve. For the counts, interchange the roles of $x$ and $y$ or sum the quadratic character.

> [!hint]- Hint 2
> The coefficient of $x^{p-1}$ in $f(x)^{(p-1)/2}$ determines the trace modulo $p$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) The invariants are $c_4=0$, $c_6=864$, $\Delta=-432=-2^4\cdot3^3$. Every integral isomorphic equation changes the discriminant exponent by a multiple of $12$. The displayed exponents are between zero and eleven at every prime, so none can be lowered while remaining nonnegative. The equation is globally minimal. Its bad primes are $2,3$; at both $\Delta=0$ and $c_4=0$ in the residue field, so the reduction is cuspidal, hence additive. Every $p>3$ is good.
>
> (b) Since $\gcd(3,p-1)=1$, exponentiation by three permutes the cyclic group $\mathbb F_p^*$ and hence the entire field. For each $y\in\mathbb F_p$ there is exactly one $x$ with $x^3=y^2+1$. Thus there are $p$ affine points and one point at infinity, giving $p+1$. At good primes in this congruence class (necessarily $p>3$), $a_p=0$ and Proposition 8.3.3 gives supersingularity. At $p=2$ the count is still three, but the curve is singular and the supersingular conclusion does not apply.
>
> (c) A nonzero square has two square roots, a nonsquare none, and zero one. Euler's criterion therefore gives the stated ordinate count. For $i>0$, sum over the cyclic multiplicative group. If a generator $g$ has $g^i\ne1$, the finite geometric sum is zero; otherwise it is $p-1=-1$ in $\mathbb F_p$. For $i=0$ the sum over all $p$ elements is zero, using the constant polynomial $1$ also at $x=0$. A Weierstrass cubic $f$ has degree three, so $f^{(p-1)/2}$ has degree $3(p-1)/2<2(p-1)$. The only positive multiple of $p-1$ that can occur is $p-1$. If its coefficient is $A$, then $\#E\equiv1-A\pmod p$.
>
> (d) Expand $(x^3-1)^m$ with $m=(p-1)/2$. The $x^{p-1}$ term has $k=(p-1)/3$ factors of $x^3$, and coefficient $(-1)^{m-k}\binom mk=(-1)^{(p-1)/6}\binom{(p-1)/2}{(p-1)/3}$. All factorials defining this binomial coefficient are factorials of integers less than $p$, so the coefficient is nonzero modulo $p$. Part (c) gives exactly the asserted count and $a_p\equiv A\ne0$, proving ordinarity.
>
> (e) For $y^2=x^3-x$, $c_4=48$, $\Delta=64=2^6$. The exponent criterion again gives a global minimal equation; only $2$ is bad and its $c_4$ is zero, so it is additive. For odd $p$ expand $f^m=x^m(x^2-1)^m$. An $x^{p-1}=x^{2m}$ term occurs exactly when $k=m/2=(p-1)/4$ is an integer. If $p\equiv3\pmod4$ there is no such term, $a_p\equiv0$, and the curve is supersingular. If $p\equiv1\pmod4$, its coefficient is $(-1)^{m-k}\binom mk\ne0$ modulo $p$, so the curve is ordinary.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 332–333 / PDF pp. 345–346. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
