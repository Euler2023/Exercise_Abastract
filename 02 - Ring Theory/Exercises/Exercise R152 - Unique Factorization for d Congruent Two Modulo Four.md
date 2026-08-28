---
title: "Exercise R152: Unique Factorization for d Congruent Two Modulo Four"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - unique-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 2, Factoring Algebraic Integers, Ex. 2.2, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise R152: Unique Factorization for d Congruent Two Modulo Four

## Problem Statement

> [!question] Exercise 2.2
> For which negative integers $d\equiv2$ modulo $4$ is the ring of integers in $\mathbb Q[\sqrt d]$ a unique factorization domain?

## Hints

> [!hint]- Hint 1
> The chapter takes $d$ square-free. For $d=-2$, approximate each complex number by a point of the rectangular lattice $\mathbb Z[\sqrt{-2}]$.

> [!hint]- Hint 2
> If $d<-2$, prove that $2$ is irreducible but divides $\sqrt d(-\sqrt d)$ without dividing either factor.

## Solution

> [!success]- Solution
> Under the chapter's square-free convention, the answer is
>
> $$
> \boxed{d=-2.}
> $$
>
> For $d=-2$, let $R=\mathbb Z[\sqrt{-2}]$ and use
>
> $$
> N(a+b\sqrt{-2})=a^2+2b^2.
> $$
>
> Given $z=x+y\sqrt{-2}\in\mathbb Q(\sqrt{-2})$, choose integers $m,n$ with $|x-m|\le\frac12$ and $|y-n|\le\frac12$. Then
>
> $$
> N\bigl(z-(m+n\sqrt{-2})\bigr)
> \le\frac14+2\cdot\frac14
> =\frac34<1.
> $$
>
> Applying this to a quotient in the field gives Euclidean division with respect to $N$. Hence $R$ is Euclidean and therefore a unique factorization domain.
>
> Now let $d<-2$ with $d\equiv2\pmod4$. Then $|d|\ge6$ and $R=\mathbb Z[\sqrt d]$. The element $2$ has norm $4$. If it factored properly, each factor would have norm $2$, but
>
> $$
> a^2+|d|b^2=2
> $$
>
> has no integer solution. Thus $2$ is irreducible. On the other hand,
>
> $$
> \sqrt d(-\sqrt d)=-d=2\left(-\frac d2\right),
> $$
>
> so $2$ divides $\sqrt d(-\sqrt d)$. Yet $2$ divides neither $\sqrt d$ nor $-\sqrt d$, because $\sqrt d/2\notin\mathbb Z[\sqrt d]$. Therefore $2$ is not prime. An irreducible nonprime cannot occur in a unique factorization domain, so none of these remaining $d$ works.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing:** Ring Theory is primary because Euclidean division and the irreducible-versus-prime criterion decide unique factorization.
- **Hypothesis boundary:** The chapter reduces radicands to square-free integers. Without that normalization, several values of $d$ name the same field and must first be replaced by their square-free part.
- **Source status:** The problem is from [S1, Ch. 13, §13.2, Ex. 2.2, printed p. 408, PDF p. 420]. The Euclidean proof for $d=-2$ and the irreducible-nonprime obstruction for all other cases are independent.
