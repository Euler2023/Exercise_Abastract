---
title: "Exercise R324: Primitive Pythagorean Triples from Gaussian Factorization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §1, Exercise 3, printed p. 5, PDF p. 24"
created: 2026-09-29
---

# Exercise R324: Primitive Pythagorean Triples from Gaussian Factorization

## Problem Statement

> [!question] Neukirch I.1.3
> Show that the integer solutions of the equation
> $$
> x^2+y^2=z^2
> $$
> such that $x,y,z>0$ and $(x,y,z)=1$ ("pythagorean triples") are all given, up to possible permutation of $x$ and $y$, by the formulae
> $$
> x=u^2-v^2,\qquad y=2uv,\qquad z=u^2+v^2,
> $$
> where $u,v\in\mathbb Z$, $u>v>0$, $(u,v)=1$, $u,v$ not both odd.
>
> **Original hint:** Use exercise 2 to show that necessarily $x+iy=\varepsilon\alpha^2$ with a unit $\varepsilon$ and with $\alpha=u+iv\in\mathbb Z[i]$.

## Hints

> [!hint]- Hint 1
> Primitivity forces the three coordinates to be pairwise coprime. Exactly one of $x,y$ is even; interchange the legs so that $x$ is odd.

> [!hint]- Hint 2
> In $(x+iy)(x-iy)=z^2$, a common Gaussian prime divides $2$. The only Gaussian prime above $2$ is associated to $1+i$, and divisibility by $1+i$ is ruled out by parity.

> [!hint]- Hint 3
> Apply Exercise I.1.2 with $n=2$. Track the unit: multiplication by $\pm i$ would exchange the parity of the real and imaginary parts.

## Solution

> [!success]- Independent derivation
> **1. Integer coprimality and parity.** If a rational prime divides two of $x,y,z$, the equation implies that it divides the third. Thus $\gcd(x,y,z)=1$ implies pairwise coprimality. The legs cannot both be even. They cannot both be odd either, because squares modulo $4$ are $0$ or $1$, whereas $x^2+y^2$ would be $2$ modulo $4$. After interchanging $x,y$, take $x$ odd and $y$ even. Then $z$ is odd.
>
> **2. Coprimality in the Gaussian ring.** Suppose a Gaussian prime $\pi$ divides both $x+iy$ and $x-iy$. Then it divides $2x$ and $2iy$, and hence $2y$. Since $\gcd(x,y)=1$, integer Bézout coefficients $r,s$ satisfy $rx+sy=1$, so $\pi$ divides $2rx+2sy=2$.
>
> We have $2=-i(1+i)^2$. Also $N(1+i)=2$, so a factorization of $1+i$ forces one factor to have norm $1$, hence to be a unit. Thus $1+i$ is irreducible and, in the Gaussian UFD, prime. Unique factorization now makes $\pi$ associated to $1+i$. But
> $$
> \frac{x+iy}{1+i}=\frac{x+y}{2}+i\frac{y-x}{2}
> $$
> is Gaussian integral exactly when $x,y$ have the same parity. They do not. This contradiction proves that $x+iy$ and $x-iy$ are relatively prime.
>
> **3. Extracting a square and controlling its unit.** Since
> $$
> (x+iy)(x-iy)=z^2,
> $$
> Exercise I.1.2 gives $x+iy=\varepsilon(a+bi)^2$ for some integers $a,b$ and a Gaussian unit $\varepsilon$. Taking norms yields
> $$
> z^2=(a^2+b^2)^2.
> $$
> As $z>0$, we have $a^2+b^2=z$, which is odd. Thus $a,b$ have opposite parity, and $(a+bi)^2$ has odd real part and even imaginary part.
>
> By Exercise I.1.1, $\varepsilon\in\{\pm1,\pm i\}$. The possibilities $\pm i$ would give an even real part, contradicting the oddness of $x$. The remaining units are squares of Gaussian units: $1=1^2$ and $-1=i^2$. Absorbing the unit therefore gives integers $u,v$ with
> $$
> x+iy=(u+iv)^2,
> \qquad x=u^2-v^2,\quad y=2uv,\quad z=u^2+v^2.
> $$
> Positivity of $x,y$ implies $|u|>|v|>0$ and $uv>0$. Replacing both $u,v$ by their negatives if necessary gives $u>v>0$. Their norm $z$ is odd, so they have opposite parity. If a rational prime divided both $u$ and $v$, it would divide $x,y,z$, contradicting primitivity. Hence $\gcd(u,v)=1$.
>
> **4. Converse.** Suppose $u>v>0$, $\gcd(u,v)=1$, and $u,v$ are not both odd. They cannot both be even, so their parities are opposite. The displayed formulae give positive integers, with $x,z$ odd, and
> $$
> (u^2-v^2)^2+(2uv)^2=(u^2+v^2)^2.
> $$
> If a rational prime $p$ divided all three coordinates, then $p\ne2$ because $x$ is odd. From $z+x=2u^2$ and $z-x=2v^2$, the odd prime $p$ would divide both $u$ and $v$, a contradiction. The triple is therefore primitive. This proves both directions of the parametrization.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Euclidean Domains]]
- [[02 - Ring Theory/Exercises/Exercise R322 - The Norm Criterion for Gaussian Units]]
- [[02 - Ring Theory/Exercises/Exercise R323 - Coprime Factors of a Gaussian Power]]
- [[02 - Ring Theory/Exercises/Exercise R150 - Gaussian Squares and Primitive Pythagorean Triples]]

## Notes

- **Source status:** [S4, Ch. I, §1, Ex. 3 and its hint, printed p. 5, PDF p. 24]. The original problem and hint were visually checked. This solution is an independent derivation following the suggested Gaussian method.
- **Proof inputs:** Gaussian unique factorization is proved in Proposition (1.2), printed pp. 1-2 / PDF pp. 20-21; integer Bézout's identity follows from the Euclidean algorithm. The power-extraction and unit arguments are proved in the linked notes for Exercises I.1.1-I.1.2.
- **Notation:** Parentheses $(x,y,z)$ and $(u,v)$ denote positive greatest common divisors. The permitted interchange of $x,y$ is essential: the formula's second leg is the even one.
- **Routing:** Although the conclusion is Diophantine, Gaussian factorization and coprimality do the main work, so this note belongs in Ring Theory.
