---
title: "Exercise R150: Gaussian Squares and Primitive Pythagorean Triples"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - gaussian-integers
  - pythagorean-triples
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 5, Gauss Primes, Ex. 5.10, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise R150: Gaussian Squares and Primitive Pythagorean Triples

## Problem Statement

> [!question] Exercise 5.10
> **(a)** Let $\alpha$ be a Gauss integer. Assume that $\alpha$ has no integer factor, and that $\overline\alpha\alpha$ is a square integer. Prove that $\alpha$ is a square in $\mathbb Z[i]$.
>
> **(b)** Let $a,b,c$ be integers such that $a$ and $b$ are relatively prime and $a^2+b^2=c^2$. Prove that there are integers $m$ and $n$ such that
>
> $$
> a=m^2-n^2,\qquad b=2mn,\qquad c=m^2+n^2.
> $$

> [!warning] Source issues
> Part (a), read literally, has the counterexample $\alpha=i$: it has no nonunit integer factor and norm $1$, but it is not a Gaussian square. The valid conclusion is that $\alpha$ is a **unit times a square**, with an exact square obtained after a unit normalization. Part (b) must name the even leg as $b$, or permit interchanging $a$ and $b$; $(a,b,c)=(4,3,5)$ contradicts the printed order. The proof below establishes these corrected intended statements.

## Hints

> [!hint]- Hint 1
> In part (a), compare the exponents of conjugate Gaussian primes and use the absence of an ordinary integer divisor.

> [!hint]- Hint 2
> In part (b), after making $b$ the even leg, show that $a+bi$ and $a-bi$ are relatively prime in $\mathbb Z[i]$.

## Solution

> [!success]- Solution
> **(a), corrected conclusion.** Factor $\alpha$ in the Gaussian UFD. An integer prime $p\equiv3\pmod4$ is itself Gaussian prime, so it cannot divide $\alpha$ under the no-integer-factor hypothesis. The ramified prime $1+i$ cannot occur either: the square norm forces its exponent to be even, while exponent at least $2$ would make the integer $2=-i(1+i)^2$ divide $\alpha$.
>
> For a split rational prime $p\equiv1\pmod4$, choose nonassociate conjugate Gaussian primes $\pi,\overline\pi$ with $p=\pi\overline\pi$. If both divided $\alpha$, then the integer $p$ would divide $\alpha$, which is forbidden. Thus at most one of the two occurs. Since $N(\alpha)$ is an integer square, the sum of their exponents is even; the sole nonzero exponent is therefore even.
>
> Every nonunit prime exponent in $\alpha$ is even, so
>
> $$
> \alpha=u\beta^2
> $$
>
> for some unit $u\in\{\pm1,\pm i\}$. The units $\pm1$ are squares of Gaussian units, while $\pm i$ are not. Thus the printed conclusion holds after normalizing the unit class to $\pm1$, and the unit-times-square statement is the exact unconditional result.
>
> **(b), corrected ordering.** For a primitive Pythagorean triple, exactly one leg is even. After interchanging the legs if necessary and changing signs harmlessly, assume $a$ is odd, $b$ is even, and $c>0$. Then
>
> $$
> (a+bi)(a-bi)=c^2.
> $$
>
> The two factors are relatively prime in $\mathbb Z[i]$. Indeed, a common Gaussian prime would divide $2a$ and $2bi$. A common prime not associated to $1+i$ would force an ordinary prime to divide both $a$ and $b$, contradicting $\gcd(a,b)=1$. The prime $1+i$ divides $a+bi$ exactly when $a$ and $b$ have the same parity, which they do not.
>
> Since two relatively prime factors have square product in a UFD, each is a unit times a square:
>
> $$
> a+bi=u(m+ni)^2.
> $$
>
> Coprimality forces $m,n$ to be relatively prime. They cannot both be odd, because then both coordinates of $(m+ni)^2$—and hence both coordinates of $u(m+ni)^2$ for every Gaussian unit $u$—would be even, contradicting the primitivity of $(a,b)$. Thus their parities are opposite. Hence $(m+ni)^2$ has odd real part and even imaginary part. Multiplication by $\pm i$ would swap those parities, so $u=\pm1$; this square unit can be absorbed into $m+ni$. Comparing real and imaginary parts gives
>
> $$
> a=m^2-n^2,\qquad b=2mn.
> $$
>
> Taking norms and using $c>0$ gives
>
> $$
> c=m^2+n^2.
> $$
>
> Thus every primitive triple has the displayed form after the even leg is designated as $b$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Routing:** Ring Theory is primary because unique factorization in $\mathbb Z[i]$ supplies both corrected conclusions.
- **Source ambiguity:** Both counterexamples and the exact repairs are recorded visibly; the printed assertions are not silently strengthened.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.5, Ex. 5.10, printed p. 381, PDF p. 393]. The diagnostic counterexamples and corrected proofs are independent.
