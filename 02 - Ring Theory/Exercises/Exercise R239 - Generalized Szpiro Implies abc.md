---
title: "Exercise R239: Generalized Szpiro Implies abc"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 14, printed p. 215, PDF p. 230"
created: 2026-09-06
---

# Exercise R239: Generalized Szpiro Implies abc

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 14
> Prove that the generalized Szpiro conjecture implies the abc conjecture.

> [!warning] Source issue / scope clarification
> The supporting text on printed p. 199 / PDF p. 214 prints $x(x-3a)(x-3b)$ but claims discriminant $3^6(abc)^2$ for $c=a+b$. That sign gives $(a-b)^2$, not $(a+b)^2$. The construction used here is explicitly corrected to $x(x-3a)(x+3b)$, consistent with the Frey polynomial $x(x-a)(x+b)$ on the preceding page.

## Hints

> [!hint]- Hint 1
> Use the integral Frey polynomial $x(x-3a)(x+3b)$ for a primitive triple $a+b=c$. Translate it to a depressed cubic.

> [!hint]- Hint 2
> Its coefficient $u=3(a^2+ab+b^2)$ controls the square of the largest of $|a|,|b|,|c|$. Prove that $\gcd(u,v)$ is bounded independently of the triple.

## Solution

> [!success]- Solution
> ### Approach
> Use the integral Frey polynomial $x(x-3a)(x+3b)$ for a primitive triple $a+b=c$. Translate it to a depressed cubic.
>
> ### Proof
> Write $\operatorname{rad}(m)$ for the product of the distinct primes dividing a nonzero integer $m$. We assume precisely the elementary generalized Szpiro statement used by Lang: for every $\eta>0$ and fixed bound $B$, there is $C_{\eta,B}$ such that nonzero integers $u,v$ with $\gcd(u,v)\le B$ and $D=4u^3-27v^2\ne0$ satisfy
> $$
> |u|\le C_{\eta,B}\operatorname{rad}(D)^{2+\eta},\qquad
> |v|\le C_{\eta,B}\operatorname{rad}(D)^{3+\eta}.
> $$
> Only the first estimate is needed.
>
> Take nonzero pairwise coprime integers $a,b,c$ with $a+b=c$. Translate $x(x-3a)(x+3b)$ by $x=z+a-b$. Direct expansion gives $z^3-uz-v$, where
> $$
> u=3(a^2+ab+b^2),\qquad
> v=(a-b)(2a+b)(a+2b),\qquad
> D=4u^3-27v^2=3^6(abc)^2.
> $$
> The last identity also follows by multiplying the squares of the three root differences $3a,3b,3c$.
>
> **Bounded common divisor.** Put $S=a^2+ab+b^2$. If a prime $\ell\ne3$ divides both $u$ and $v$, it divides $S$ and one of $a-b,2a+b,a+2b$. Substituting the corresponding relation into $S$ gives $3a^2$ or $3b^2$ modulo $\ell$, contradicting $\gcd(a,b)=1$. (This covers $\ell=2$ as well.) If $3\mid S$, neither $a$ nor $b$ is divisible by $3$, and $a=b+3t$ for an integer $t$. Then
> $$
> S=3(b^2+3bt+3t^2),
> $$
> whose factor in parentheses is not divisible by $3$. Hence $v_3(u)=2$. If $3\nmid S$, then $v_3(u)=1$. In all cases $\gcd(u,v)$ divides $9$.
>
> If $v=0$, one of $a=b$, $2a=-b$, or $a=-2b$ holds; pairwise coprimality then implies $\max(|a|,|b|,|c|)\le2$. These finitely many cases can be absorbed into the final constant. Otherwise apply generalized Szpiro with $B=9$.
>
> Let $H=\max(|a|,|b|,|c|)$. Since $2S=a^2+b^2+c^2$, we have $H^2\le2u/3$. Also $\operatorname{rad}(D)\le3\operatorname{rad}(abc)$. Therefore
> $$
> H\le\sqrt{2C_{\eta,9}/3}\,[3\operatorname{rad}(abc)]^{1+\eta/2}.
> $$
> Given any $\varepsilon>0$, choose $\eta=2\varepsilon$ and absorb powers of $3$ and the finite exceptional cases into $C_\varepsilon$. We obtain $H\le C_\varepsilon\operatorname{rad}(abc)^{1+\varepsilon}$, the abc conjecture.

## Related Concepts

- [[02 - Ring Theory/Concepts/abc and Generalized Szpiro Conjectures|abc and Generalized Szpiro Conjectures]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Exercises/Exercise R237 - Quadratic Cubic and Root-Product Discriminants|R237 — Quadratic Cubic and Root-Product Discriminants]]

## Notes

- **Proof status:** This is a complete proof of the implication under the stated generalized Szpiro hypothesis, not an unconditional proof of either conjectural bound. The exact formulations were checked in [S2, Ch. IV, §7, printed pp. 196-199, PDF pp. 211-214].
- **Routing:** Ring Theory is primary because elementary polynomial discriminants, prime divisibility, and inequalities supply the proof. No elliptic-curve theorem is imported.
- **Computational check:** Exact symbolic expansion checked the translated cubic and $4u^3-27v^2=3^6(abc)^2$. The coprimality bound and the conditional implication are proved above.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 14, printed p. 215, PDF p. 230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
