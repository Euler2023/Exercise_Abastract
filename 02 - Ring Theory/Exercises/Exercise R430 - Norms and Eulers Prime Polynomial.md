---
title: "Exercise R430: Norms and Euler's Prime Polynomial"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - unique-factorization
source: "Adapted from Dorian Goldfeld, Gauss' class number problem for imaginary quadratic fields, Bulletin of the American Mathematical Society (New Series) 13 (1985), 23–37, §1, Euler's polynomial and the unnumbered Rabinovitch theorem, printed p. 23, PDF p. 1"
paper_refs:
  - "paper/goldfeld-1985/sec-1/rabinovitch-special-case"
created: 2026-10-26
---

# Exercise R430: Norms and Euler's Prime Polynomial

## Problem Statement

> [!question] Adapted norm proof and hypothesis audit
> Put $K=\mathbb Q(\sqrt{-163})$, $\omega=(1+\sqrt{-163})/2$, and $\mathcal O_K=\mathbb Z[\omega]$.
>
> **Allowed earlier input:** $\mathcal O_K$ is a UFD. This is established for this field in [[02 - Ring Theory/Exercises/Exercise R177 - Unique Factorization in the Nine Heegner Rings|Exercise R177]]. Alternatively, use $h(-163)=1$ from [[02 - Ring Theory/Exercises/Exercise R429 - Reduction Bounds and Two Imaginary Quadratic Class Numbers|Exercise R429]] and the Dedekind-domain equivalence between trivial class group, PID, and UFD.
>
> **(a)** Calculate $N(a+b\omega)$ and prove that every nonrational element of $\mathcal O_K$ has norm at least $41$. Determine its units.
>
> **(b)** Prove that $f(n)=n^2-n+41$ is a rational prime for every integer $1\le n\le40$, by using unique factorization and norms. Explain what happens at $n=41$.
>
> **(c)** Goldfeld's displayed Rabinovitch theorem states the conditions $D<0$, $D\equiv1\pmod4$ and relates primality of $x^2-x+(1+|D|)/4$ for $1\le x\le(|D|-3)/4$ to unique factorization in the field's full ring of integers. Show with $D=-27$ that these displayed conditions need an additional restriction when read literally.

> [!warning] Source issue: distinguish a field discriminant from an arbitrary integer
> The displayed theorem does not explicitly say that $D$ is fundamental. With the phrase “integers of the field” interpreted as its full ring of integers, $D=-27$ is a counterexample to the literal statement. The intended field-discriminant version restricts $D$ to negative fundamental discriminants with $D\equiv1\pmod4$. Part (b) proves the $D=-163$ instance directly; the full corrected equivalence is a separate theorem.

## Hints

> [!hint]- Hint 1
> Use $\omega+\overline\omega=1$, $\omega\overline\omega=41$, and complete the square. If $f(n)$ is composite, it has a rational prime divisor $q<41$.

> [!hint]- Hint 2
> In the UFD $\mathcal O_K$, either $q$ is irreducible and hence prime, or a factorization of $q$ into two nonunits would produce an element of norm $q$. Apply the two alternatives to $N(n-\omega)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent special-case proof using the explicitly allowed UFD input, followed by a verified counterexample to the source's displayed hypotheses.
>
> **(a)** Conjugation gives
> $$
> N(a+b\omega)=a^2+ab+41b^2
> =\left(a+\frac b2\right)^2+\frac{163}{4}b^2.
> $$
> If $b\ne0$, this is an integer at least $163/4$, hence at least $41$. If $b=0$, the norm is $a^2$. A unit has norm $1$ by multiplicativity, so the only units are $\pm1$, and both are units.
>
> **(b)** Suppose $f(n)$ is composite for $1\le n\le40$. It has a rational prime divisor
> $$
> q\le\sqrt{f(n)}\le\sqrt{1601}<41.
> $$
> First, $q$ is irreducible in $\mathcal O_K$. Otherwise $q=\beta\gamma$ with two nonunits, so
> $$
> q^2=N(q)=N(\beta)N(\gamma).
> $$
> Both factors on the right are integers greater than $1$, and therefore both equal $q$. Part (a) excludes norm $q<41$ for nonrational elements, while rational elements of $\mathcal O_K$ are integers and have square norm. A prime $q$ is not a square. This is a contradiction.
>
> Since $\mathcal O_K$ is a UFD, irreducible $q$ is prime. But
> $$
> (n-\omega)(n-\overline\omega)=n^2-n+41=f(n)
> $$
> is divisible by $q$, so $q$ divides one of the two factors in $\mathcal O_K$. Relative to the integral basis $1,\omega$, the factors have coefficient pairs $(n,-1)$ and $(n-1,1)$. Neither lies in $q\mathcal O_K$, since its second coefficient is $\pm1$. This final contradiction proves primality for all forty values.
>
> At the next argument,
> $$
> f(41)=41^2.
> $$
> Thus the asserted range has an exact endpoint.
>
> **(c)** For $D=-27$ the proposed polynomial is $x^2-x+7$ and the range includes $x=2$, where the value is $9$, a composite integer. However,
> $$
> \mathbb Q(\sqrt{-27})=\mathbb Q(\sqrt{-3})
> $$
> has full ring of integers $\mathbb Z[\eta]$ with $\eta=(1+\sqrt{-3})/2$. This ring is Euclidean: for any quotient in $\mathbb Q(\sqrt{-3})$, round its coordinates in the basis $1,\eta$. The error $u+v\eta$ has $|u|,|v|\le1/2$, so
> $$
> N(u+v\eta)=u^2+uv+v^2\le\frac34<1.
> $$
> Multiplying back by the divisor gives a smaller norm remainder. A Euclidean domain is a UFD, so the right-hand unique-factorization assertion holds while the primality assertion fails.
>
> The integer $-27$ is not the field's fundamental discriminant; that discriminant is $-3$. It satisfies both displayed congruence and sign conditions, proving that those conditions alone are insufficient.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]

## Notes

- **Adaptation:** The source presents Euler's forty prime values and an unnumbered Rabinovitch theorem. The norm proof and hypothesis-audit subparts are independently composed.
- **Dependency boundary:** The UFD property for $\mathbb Q(\sqrt{-163})$ is the named earlier input. The proof does not establish the classification of all imaginary quadratic fields of class number one.
- **Relation to existing exercises:** R177 establishes unique factorization. This exercise uses it to prove a new prime-value consequence, including the exact endpoint and a nonfundamental-discriminant counterexample.
- **Routing:** Factorization in rings of integers and multiplicativity of the norm supply the argument.
