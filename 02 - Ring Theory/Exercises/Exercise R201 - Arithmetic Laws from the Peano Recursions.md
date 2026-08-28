---
title: "Exercise R201: Arithmetic Laws from the Peano Recursions"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - peano-arithmetic
  - induction
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.2, The Integers, Ex. A.9, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R201: Arithmetic Laws from the Peano Recursions

## Problem Statement

> [!question] Exercise A.9
> Prove the following laws for the natural numbers.
>
> **(a)** the commutative law for addition,
>
> **(b)** the associative law for multiplication,
>
> **(c)** the distributive law,
>
> **(d)** the cancellation law for addition: if $a+b=a+c$, then $b=c$.

## Hints

> [!hint]- Hint 1
> Use the recursive definitions $m+1=m'$, $m+n'=(m+n)'$, $m1=m$, and $mn'=mn+m$.

## Solution

> [!success]- Solution
> We use the associative law for addition proved immediately before the exercises in the source.
>
> **(a)** Induction on $n$ gives $1+n=n'$, and the same recursion gives $m'+n=(m+n)'$. A second induction gives
>
> $$
> m+n=n+m:
> $$
>
> the base case is $m+1=m'=1+m$, and
>
> $$
> m+n'=(m+n)'=(n+m)'=n+m'.
> $$
>
> **Preliminary multiplication symmetry.** Induction gives $1n=n$ and $m'n=mn+n$. Hence another induction gives $mn=nm$: the successor step is
>
> $$
> mn'=mn+m=nm+m=n'm.
> $$
>
> **(c)** We first prove left distributivity by induction on $c$. The case $c=1$ is
>
> $$
> a(b+1)=ab'=ab+a=ab+a1.
> $$
>
> If the formula holds for $c$, then
>
> $$
> a(b+c')=a((b+c)')=a(b+c)+a=ab+ac+a=ab+ac'.
> $$
>
> Thus $a(b+c)=ab+ac$. Multiplication commutativity gives the right distributive law as well.
>
> **(b)** Now induct on $c$. The base case is $(ab)1=ab=a(b1)$. For the successor step,
>
> $$
> (ab)c'=(ab)c+ab=a(bc)+ab=a(bc+b)=a(bc').
> $$
>
> Hence multiplication is associative.
>
> **(d)** Induct on $a$. If $1+b=1+c$, then $b'=c'$, and injectivity of the successor map gives $b=c$. If cancellation holds for $a$, then
>
> $$
> a'+b=(a+b)',
> \qquad
> a'+c=(a+c)'.
> $$
>
> Equality of the left sides and successor injectivity give $a+b=a+c$, so the induction hypothesis yields $b=c$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]
- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]

## Notes

- **Routing:** Ring Theory is primary because these recursive laws are the algebraic foundation of the natural-number semiring.
- **External source input:** The proof uses the associative law for addition established in the surrounding text at [S1, Appendix, §A.2, printed p. 517, PDF p. 529]. All remaining induction steps are supplied here.
- **Source status:** [S1, Appendix, §A.2, Ex. A.9, printed p. 521, PDF p. 533].
