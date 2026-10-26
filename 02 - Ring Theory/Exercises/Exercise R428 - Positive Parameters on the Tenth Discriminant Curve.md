---
title: "Exercise R428: Positive Parameters on the Tenth Discriminant Curve"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - unique-factorization
source: "Adapted from I. R. Shafarevich, On the problem of the 10th discriminant, St. Petersburg Mathematical Journal 25 (2014), 699–711, §3, Lemma 3, cases (a) and (c), printed p. 709, PDF p. 11; compare the Introduction, printed p. 700, PDF p. 2"
paper_refs:
  - "paper/shafarevich-2014/sec-3/lemma-3/positive-parameter"
created: 2026-10-26
---

# Exercise R428: Positive Parameters on the Tenth Discriminant Curve

## Problem Statement

> [!question] Adapted positive-parameter case
> Let $p\in\mathbb Z_{>0}$ and $s\in\mathbb Z$ satisfy
> $$
> s^2=2p(p^3-1).
> $$
> Here $p$ denotes an arbitrary positive integer.
>
> **(a)** Show that if $p$ is odd, then $p=q^2$ and $p^3-1=2v^2$ for some integers $q,v$. If $p$ is even, show that $2p=q^2$ and $p^3-1=v^2$.
>
> **(b)** Prove that $\mathbb Z[\sqrt{-2}]$ is Euclidean for the norm $N(a+b\sqrt{-2})=a^2+2b^2$. Use unique factorization in this ring to show that the odd case forces $p=1$.
>
> **(c)** Exclude even $p$ and determine all solutions with $p>0$.

> [!warning] Source issue: the curve has opposite signs in two locations
> The Introduction prints $y^2=2x(1-x^3)$, whereas §3, equations (12)–(13) and Lemma 3, print $s^2=2p(p^3-1)$. These are different real equations with the same parameter substitution $x=p$. For example, the later listed point $(p,s)=(-1,2)$ satisfies the latter equation and fails the introductory equation. The exercise uses the equation in Lemma 3.

## Hints

> [!hint]- Hint 1
> Use $\gcd(p,p^3-1)=1$ and compare prime valuations in a square. For the Euclidean algorithm, round the two rational coordinates of an element of $\mathbb Q(\sqrt{-2})$.

> [!hint]- Hint 2
> Factor $p^3=(1+v\sqrt{-2})(1-v\sqrt{-2})$. A common nonunit divisor would divide $2$ and have odd norm. Expand $(a+b\sqrt{-2})^3$ and compare its rational coefficient.

## Solution

> [!success]- Solution
> **Proof scope:** Independent proof of the positive-parameter part of the source lemma.
>
> **(a)** The integers $p$ and $p^3-1$ are coprime. If $p$ is odd, every prime exponent in $p$ is even, so $p=q^2$ with $q$ odd. Since $q^2\mid s^2$, write $s=qw$. The equation becomes $w^2=2(p^3-1)$, so $w=2v$ and $p^3-1=2v^2$.
>
> If $p$ is even, all odd prime exponents in $p$ are even, and $v_2(2p)$ is even because $p^3-1$ is odd. Hence $2p=q^2$. Writing $s=qv$ gives $v^2=p^3-1$.
>
> **(b)** Let $R=\mathbb Z[\sqrt{-2}]$. Given $\alpha,\beta\in R$ with $\beta\ne0$, write $\alpha/\beta=x+y\sqrt{-2}$ with $x,y\in\mathbb Q$. Choose integers $a,b$ with $|x-a|,|y-b|\le1/2$. Then
> $$
> N\bigl(\alpha/\beta-(a+b\sqrt{-2})\bigr)
> \le\frac14+2\frac14=\frac34<1.
> $$
> Thus $\alpha=\beta(a+b\sqrt{-2})+\rho$ with either $\rho=0$ or $N(\rho)<N(\beta)$. This proves the Euclidean property. We use the Euclidean-domain theorem that every Euclidean domain is a PID and hence a UFD. The only units of $R$ are $\pm1$, since $a^2+2b^2=1$ has precisely $(a,b)=(\pm1,0)$.
>
> For odd $p$, put $\alpha=1+v\sqrt{-2}$. By (a),
> $$
> \alpha\overline\alpha=1+2v^2=p^3.
> $$
> If $\pi$ were a common nonunit prime divisor of $\alpha$ and $\overline\alpha$, then $\pi\mid2$, so $N(\pi)\mid4$. Also $N(\pi)\mid N(\alpha)=p^3$, which is odd. Therefore $N(\pi)=1$, a contradiction. The factors are coprime.
>
> In a UFD, the exponent of every prime in $\alpha$ is consequently divisible by $3$: the product is the cube $p^3$, and its two factors have disjoint prime supports. The unit can be absorbed into a cube because both units $\pm1$ are cubes. Hence
> $$
> 1+v\sqrt{-2}=(a+b\sqrt{-2})^3.
> $$
> Comparing rational coefficients gives
> $$
> 1=a(a^2-6b^2).
> $$
> Thus $a=\pm1$. For $a=1$ the equation forces $b=0$; for $a=-1$ it gives $6b^2=2$, impossible in integers. We obtain $\alpha=1$, so $v=0$ and $p^3=1$, whence $p=1$.
>
> **(c)** For even $p$, part (a) gives $v^2=p^3-1$. But $p^3\equiv0\pmod8$, so $v^2\equiv7\pmod8$, whereas square residues modulo $8$ are $0,1,4$. This is impossible.
>
> The only positive-parameter solution is therefore $(p,s)=(1,0)$, which directly satisfies the equation.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals]]

## Notes

- **Adaptation:** The source treats all integral parameters and splits the proof into four square-class cases. This exercise covers the positive parameters, proves the Euclidean input, and replaces the even positive case with a modulo-$8$ argument.
- **Boundary:** The full source list also includes $(0,0)$, $(-1,\pm2)$, and $(-2,\pm6)$. Direct substitution verifies these points. Exhaustion of the negative-parameter solutions is outside the assigned problem; the source's final case imports an Euler result.
- **Routing:** Valuations, norms, coprime factorization, and Euclidean division determine the proof.

- **Finite verification actually run:** Exact integer-square testing for every positive parameter $1\le p\le10000$ found only $(1,0)$. This finite check supplements the proof and makes no claim about parameters outside the tested range.
