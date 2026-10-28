---
title: "Exercise MF78: Euler Formal Sums and Zeta Special Values"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.4, Exercise 4.4.3, printed pp. 124\u2013125, PDF pp. 138\u2013139"
source_refs:
  - "S7/ch-4/sec-4/ex-3"
created: 2026-10-28
---

# Exercise MF78: Euler Formal Sums and Zeta Special Values

## Problem Statement

> [!question] Original Exercise 4.4.3
> This exercise presents an argument due to Euler for the functional equation of $\zeta(s)$.
>
> (a) Let $t$ be a formal variable. Starting from
> $$
> t+t^2+t^3+\cdots=(t-t^2+t^3-t^4+\cdots)+2(t^2+t^4+t^6+\cdots),
> $$
> show that applying $t\,d/dt$ $n$ times gives
> $$
> 1^nt+2^nt^2+3^nt^3+\cdots=\left(t\frac d{dt}\right)^n\frac{t}{1+t}+2^{n+1}(1^nt^2+2^nt^4+3^nt^6+\cdots).
> $$
> Formally, when $t=1$ this is $\zeta(-n)=((t\,d/dt)^n(t/(1+t)))|_{t=1}+2^{n+1}\zeta(-n)$, giving a heuristic value. Thus for example, according to Euler, $1+1+\cdots=-1/2$ and $1+2+3+\cdots=-1/12$.
>
> (b) Let $t=e^X$, so $t\,d/dt=d/dX$. Now
> $$
> (1-2^{n+1})\zeta(-n)=\left[\frac{d^n}{dX^n}\frac{e^X}{e^X+1}\right]_{X=0},\qquad
> \frac{e^X}{e^X+1}=\sum_{n=0}^\infty\frac{(1-2^{n+1})\zeta(-n)}{n!}X^n.
> $$
> Thus $F(z)=e^{2\pi iz}/(e^{2\pi iz}+1)$ generates these values, with the same series after $X=2\pi iz$. Let $G(z)=\pi\cot\pi z=\pi i(e^{2\pi iz}+1)/(e^{2\pi iz}-1)=z^{-1}-2\sum_{j\ge1}\zeta(2j)z^{2j-1}$. Use the rational forms to show
> $$
> \frac1{\pi i}(G(z)-2G(2z))=-F(z)+F(-z),
> $$
> and equate coefficients to obtain $\zeta(1-k)=2\Gamma(k)\zeta(k)/(2\pi i)^k$ for even $k\ge2$. The value of $\zeta(k)$ from Exercise 1.1.7 shows $\zeta(1-k)=-B_k/k$.
>
> (c) Use (4.16) to show
> $$
> \pi^{-k/2}\Gamma(k/2)\zeta(k)=\pi^{-(1-k)/2}\Gamma((1-k)/2)\zeta(1-k)
> $$
> for even $k\ge2$, a partial version of the functional equation. The ideas can be made into a rigorous meromorphic-continuation and functional-equation proof, as the source notes.

> [!warning] Source issue and corrected scope
> The source expressly calls the $t=1$ step heuristic. The divergent series in (a) do not have the printed negative numbers as ordinary sums. The solution proves the formal identities, supplies an explicit Mellin/Taylor continuation argument for the special values, and only then performs the analytic coefficient comparison.

## Hints

> [!hint]- Hint 1
> Formal differentiation is legitimate coefficientwise, but substituting $t=1$ in the divergent power sum is not an ordinary convergence argument.

> [!hint]- Hint 2
> To justify the negative zeta values, use the Mellin integral of $1/(e^t+1)$ and subtract its Taylor expansion near zero.

> [!hint]- Hint 3
> In the rational identity put $w=e^{2\pi iz}$, then compare the coefficient of $z^{k-1}$ for even $k$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a), exact formal identity.** In the ring of formal power series, the operator $D=t\,d/dt$ sends $t^r$ to $rt^r$, so $D^nt^r=r^nt^r$. Applying it coefficientwise to the given parity decomposition proves the asserted identity, since $\sum_{r\ge1}(-1)^{r-1}t^r=t/(1+t)$ and the even-index sum gains $2^n$. This is also an analytic identity for $|t|<1$. Substitution $t=1$ into $\sum r^nt^r$ is not legitimate as an ordinary sum: its terms do not even tend to zero. The two displayed “values” of divergent sums refer only to zeta continuation.
>
> **Rigorous bridge to the zeta values.** We supply it rather than silently use the heuristic substitution. Put $A(t)=1/(e^t+1)=\sum_{j\ge0}c_jt^j$ near zero. For $\operatorname{Re}s>1$, absolute termwise integration of $A(t)=\sum_{r\ge1}(-1)^{r-1}e^{-rt}$ gives
> $$
> \int_0^\infty A(t)t^{s-1}dt=\Gamma(s)\eta(s),\qquad \eta(s)=(1-2^{1-s})\zeta(s).
> $$
> For any $m\ge0$, write this integral as
> $$
> \int_1^\infty A(t)t^{s-1}dt+\int_0^1\left(A(t)-\sum_{j=0}^mc_jt^j\right)t^{s-1}dt+\sum_{j=0}^m\frac{c_j}{s+j}.
> $$
> The first term is entire and the second is holomorphic for $\operatorname{Re}s>-m-1$, by exponential decay and the Taylor remainder bound. Thus this expression continues the integral meromorphically, with residue $c_n$ at $s=-n$. The Gamma recurrence gives $\operatorname{Res}_{s=-n}\Gamma(s)=(-1)^n/n!$, so its reciprocal has expansion $(-1)^nn!(s+n)+O((s+n)^2)$. Therefore
> $$
> \eta(-n)=(-1)^nn!c_n.
> $$
> Since $F(X/(2\pi i))=e^X/(e^X+1)=A(-X)$, its $n$th derivative at zero is $(-1)^nn!c_n$. This proves rigorously the derivative and Taylor formulas in (b), using the analytically continued $\zeta(-n)$. For $n=0,1$ the derivatives are $1/2,1/4$, giving $\zeta(0)=-1/2$ and $\zeta(-1)=-1/12$, without assigning ordinary sums to divergent series.
>
> **(b), coefficient comparison.** Put $w=e^{2\pi iz}$. Direct algebra gives
> $$
> \frac{G(z)-2G(2z)}{\pi i}=\frac{w+1}{w-1}-2\frac{w^2+1}{w^2-1}=\frac{1-w}{1+w}=-F(z)+F(-z).
> $$
> The apparent pole at zero on the left cancels. For even $k\ge2$, its coefficient at $z^{k-1}$ is $-2(1-2^k)\zeta(k)/(\pi i)$. The right coefficient, using the rigorously established Taylor series, is $-2(1-2^k)\zeta(1-k)(2\pi i)^{k-1}/\Gamma(k)$. Since $1-2^k\ne0$, equality yields
> $$
> \zeta(1-k)=\frac{2\Gamma(k)}{(2\pi i)^k}\zeta(k).
> $$
> The coefficient comparison is analytic in a neighborhood of zero: $G$'s Laurent expansion follows from its convergent cotangent partial fractions for $|z|<1$, and $F$'s Taylor series converges for $|z|<1/2$. If one imports Euler's Bernoulli formula $\zeta(k)=(-1)^{k/2+1}B_k(2\pi)^k/[2k!]$ from Exercise 1.1.7, substitution gives $\zeta(1-k)=-B_k/k$. This Bernoulli formula is a separately named input, not derived from a divergent sum.
>
> **(c).** Equation (4.16), proved in Exercise 4.4.2, states that the ratio of the right Gamma factor to the left one is $C_k/2$, where $C_k=(-2\pi i)^k/\Gamma(k)$. For even $k$, part (b) gives $\zeta(1-k)=2\zeta(k)/C_k$. Multiplying these two identities proves the required completed-zeta equality. It is proved here at the indicated even integers, rather than asserted to establish the functional equation for every complex argument.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.4.3, printed pp. 124–125 / PDF pp. 138–139]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof scope:** The supplied continuation argument rigorously identifies the negative integer values used by Euler's method. Part (c) establishes only the requested discrete specializations; it does not infer a full complex functional equation from equality on the even integers, which have no finite accumulation point.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
