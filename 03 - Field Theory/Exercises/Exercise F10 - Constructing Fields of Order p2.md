---
title: "Exercise F10: Constructing Fields of Order p2"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - quotient-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 7, Ex. 7.9, printed p. 474, PDF p. 486"
created: 2026-08-10
---

# Exercise F10: Constructing Fields of Order $p^2$

## Problem Statement

> [!question] Exercise
> Work without appealing to Theorem 15.7.3. Let $F=\mathbb F_p$.
>
> **(a)** Determine the number of monic irreducible polynomials of degree $2$ in $F[x]$.
>
> **(b)** Let $f(x)$ be an irreducible polynomial of degree $2$ in $F[x]$. Prove that $K=F[x]/(f)$ is a field of order $p^2$, and that its elements have the form $a+b\alpha$, where $a$ and $b$ are in $F$ and $\alpha$ is a root of $f$ in $K$. Moreover, every such element with $b\ne0$ is the root of an irreducible quadratic polynomial in $F[x]$.
>
> **(c)** Show that every polynomial of degree $2$ in $F[x]$ has a root in $K$.
>
> **(d)** Show that all the fields $K$ constructed as above for a given prime $p$ are isomorphic.

## Hints

> [!hint]- Hint 1
> Count reducible monic quadratics by unordered pairs of roots in $F$.

> [!hint]- Hint 2
> Count the elements of $K\setminus F$ and compare with twice the answer to part (a).

## Solution

> [!success]- Solution
> **(a)** There are $p^2$ monic quadratics. A reducible monic quadratic is determined by an unordered pair of roots in $F$, with repetition allowed. There are
> $$
> \binom{p+1}{2}=\frac{p(p+1)}2
> $$
> such pairs. Hence the number of monic irreducible quadratics is
> $$
> p^2-\frac{p(p+1)}2=\frac{p(p-1)}2.
> $$
>
> **(b)** Since $(f)$ is maximal, $K=F[x]/(f)$ is a field. If $\alpha$ is the residue of $x$, division by $f$ gives a unique representation
> $$
> a+b\alpha,qquad a,b\in F,
> $$
> so $|K|=p^2$. If $b\ne0$, then $a+b\alpha\notin F$. Its degree over $F$ divides $[K:F]=2$ but is not $1$, so its minimal polynomial is an irreducible quadratic.
>
> **(c)** There are $p^2-p=p(p-1)$ elements of $K\setminus F$. By part (a), there are $p(p-1)/2$ monic irreducible quadratics, and each has at most two roots in $K$. Part (b) assigns every element of $K\setminus F$ to one of these polynomials. Since the domain has exactly twice as many elements as there are polynomials, every irreducible quadratic occurs and has two roots in $K$. Reducible quadratics already have a root in $F\subset K$. Scaling handles nonmonic quadratics.
>
> **(d)** Let $L=F[y]/(g)$ be another such field. By part (c), $g$ has a root $\gamma$ in $K$. Evaluation $y\mapsto\gamma$ induces an injective $F$-homomorphism $L\to K$. Both fields have $p^2$ elements, so it is surjective and hence an isomorphism.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

The proof deliberately avoids Theorem 15.7.3, as requested. It uses only elementary counting, quotient fields, and degree two.
