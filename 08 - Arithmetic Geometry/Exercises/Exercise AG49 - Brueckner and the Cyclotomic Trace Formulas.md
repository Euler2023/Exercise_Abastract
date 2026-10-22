---
title: 'Exercise AG49: Brueckner and the Cyclotomic Trace Formulas'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 2, printed p. 340, PDF p. 359
source_refs:
- S4/ch-V/sec-3/ex-2
created: '2026-10-23'
---

# Exercise AG49: Brueckner and the Cyclotomic Trace Formulas

## Problem Statement

> [!question] Neukirch V.3.2
> Deduce proposition (3.8) from theorem (3.7).
>
> **Referenced proposition (3.8), transcribed for a self-contained problem.** Put $\Phi_\nu=\mathbb Q_p(\zeta)$, where $\zeta$ is a primitive $p^\nu$-th root of unity ($p\ne2$), $\pi=1-\zeta$, and $S=\operatorname{Tr}_{\Phi_\nu/\mathbb Q_p}$. For $a\in U_{\Phi_\nu}^{(2p^{\nu-1})}$ and $b\in\Phi_\nu^*$ one has
> $$
> \tag{1}(a,b)_{p^\nu}=\zeta^{S(\zeta\log a\,D\log b)/p^\nu},
> $$
> where $D\log$ denotes the formal logarithmic derivative in $\pi$ of an arbitrary representation of $b$ as an integral power series in $\pi$ with coefficients in $\mathbb Z_p$. For $a\in U_{\Phi_\nu}^{(1)}$ one has furthermore the two supplementary theorems
> $$
> \tag{2}(\zeta,a)_{p^\nu}=\zeta^{S(\log a)/p^\nu},
> \qquad
> \tag{3}(a,\pi)_{p^\nu}=\zeta^{S((\zeta/\pi)\log a)/p^\nu}.
> $$
>
> **Referenced theorem (3.7).** For a local field $K\supseteq\mu_{p^\nu}$ of residue characteristic $p\ne2$, let $W$ be the ring of integers of its maximal unramified subfield. Choose a uniformizer $\varpi$, write $1-\zeta=\varpi^e\varepsilon$, and lift $\varepsilon$ to $\eta(X)\in W[[X]]$. Put
> $$
> h(X)=\frac12\frac{1+(1-X^e\eta(X))^{p^\nu}}{1-(1-X^e\eta(X))^{p^\nu}}.
> $$
> For $x=f(\varpi),y=g(\varpi)$ with $f,g\in W((X))^*$, let $f^P=\sum\phi(a_i)X^{pi}$ when $f=\sum a_iX^i$ and $\phi$ is Frobenius on $W$. Then
> $$
> (x,y)_{p^\nu}=\zeta^{\omega(x,y)},
> $$
> $$
> \omega(x,y)=\operatorname{Tr}_{W/\mathbb Z_p}\operatorname{Res}\,h\left(
> \frac1p\log\frac{f^p}{f^P}\,d\log g-
> \frac1p\log\frac{g^p}{g^P}\,\frac1p d\log f^P\right)\pmod{p^\nu}.
> $$
> The symbol on this page is written $(\ ,\ )_{p^\nu}$ here to make its order explicit; it is the source's displayed Hilbert symbol.

## Hints

> [!hint]- Hint 1
> First specialize the Brückner data to $W=\mathbb Z_p$, $e=1$, $\eta=1$ and $\pi=1-\zeta$. Track the coefficient whose residue is taken.

> [!hint]- Hint 2
> In the cyclotomic case $e=1$, $\eta=1$, $W=\mathbb Z_p$. Change the Frobenius lift to $\psi(X)=1-(1-X)^p$ and push the residue through its norm operator. The supplementary formula (2) can also be calibrated independently by cyclotomic reciprocity and norms.

## Solution

> [!success]- Independent derivation
> Put
> $$
> Q_j(X)=1-(1-X)^{p^j},\qquad h_j=Q_j^{-1}-\frac12\quad(j\ge0),\qquad T_j(\omega)=\operatorname{Res}(h_j\omega).
> $$
> In particular $Q_0=X$ and $h_0=X^{-1}-1/2$. All residues below use the $p$-adically convergent Laurent expansion on an outer annulus $|X|<1$ close enough to $1$; they are not the ordinary expansion at $X=0$ over $\mathbb Q_p$. This distinction is essential because $Q_j^{-1}=X^{-p^j}(1+pR_j/X^{p^j})^{-1}$ in that Laurent ring.
>
> We give the residue calculation for every $\nu$, including the two supplementary formulas. The independent algebraic input concerning the norm of formal series is proved in Exercises V.5.1–V.5.3 in this archive: for the multiplicative formal group $F(X,Y)=X+Y-XY$ and its $p$-series
> $$
> \psi(X)=1-(1-X)^p,
> $$
> there is a norm operator $N$ on $\mathcal M=X^{\mathbb Z}\mathbb Z_p[[X]]^*$, defined by
> $$
> (Ng)(\psi(X))=\prod_{\xi^p=1}g(1-\xi(1-X)).
> $$
> It satisfies $Ng\equiv g\pmod p$ and $N(X)=X$. The latter follows exactly from $\prod_{\xi^p=1}(1-\xi(1-X))=\psi(X)$. Thus
> $$
> H_g:=\frac1p\log\frac{Ng}{g}\in\mathbb Z_p[[X]]
> $$
> for all $g\in\mathcal M$, including negative powers of $X$. The norm reduction is the finite-product reduction modulo $p$ followed by injectivity of substitution $X\mapsto X^p$; no reciprocity formula is an input to this norm construction.
>
> **1. Changing the Frobenius lift.** We prove that the Brückner residue can use $\psi(X)$ in place of $X^p$. Let $\mathcal R$ be the $p$-adically complete ring of integral Laurent series whose negative coefficients tend to zero $p$-adically. Its derivative preserves integrality. For a lift $\phi\equiv X^p\pmod p$, put
> $$
> L_\phi(g)=\frac1p\log\frac{g(X)^p}{g(\phi(X))}\in\mathcal R.
> $$
> The quotient lies in $1+p\mathcal R$, and $p$ is odd, so its logarithm divided by $p$ is integral. When $f\in1+X\mathbb Z_p[[X]]$, write $F=\log f$ as an analytic series; **$F$ itself need not be integral**. Nevertheless $F'=f'/f$ is integral. The differential in Brückner is
> $$
> B_\phi(f,g)=L_\phi(f)\,d\log g-L_\phi(g)\,\frac1p d\log f(\phi(X)).
> $$
> Set $\phi_t=X^p+t\delta$, where $\delta=\psi-X^p\in pX\mathbb Z_p[X]$. Formal differentiation in $t$, with cancellation of the two mixed derivative terms, gives
> $$
> \frac{\partial B_{\phi_t}}{\partial t}=-d\left(L_{\phi_t}(g)\,F'(\phi_t)\frac\delta p\right).
> $$
> For verification one can temporarily write $G=\log g$: then $B_\phi=F\,dG-p^{-1}d(GF(\phi))+p^{-2}G(\phi)dF(\phi)$, whose $t$ derivative is the displayed exact differential. Only logarithmic derivatives and the convergent logarithmic ratios survive, so this calculation also applies to $g=X^r u$; it does not require a formal power-series definition of $\log X$.
>
> The integral in $t$ from $0$ to $1$ on the right has an **integral** coefficient series. Here are the denominator checks. The coefficient of $t^k$ in $L_{\phi_t}(g)$, for $k\ge1$, has $p$-valuation at least $k-1-\lfloor\log_p k\rfloor$: expand $g(\phi_t)/g(X^p)$ in powers of the $p$-divisible $\delta$, then its logarithm, whose $j$-th term divides by $j\le k$. The constant coefficient is integral. The coefficient of $t^r$ in $F'(\phi_t)$ is divisible by $p^r$, since $F'$ is integral and every such term contains $\delta^r$. Multiplication by $\delta/p$ is integral. Consequently the coefficient of $t^k$, $k\ge1$, in their product has valuation at least $k-1-\lfloor\log_p k\rfloor$. Integration divides by $k+1$, and
> $$
> k-1-\lfloor\log_p k\rfloor-v_p(k+1)\ge0\qquad(k\ge1,\ p\ge3).
> $$
> For example the finitely small cases $k=1,2,3,4$ are immediate; for $k\ge5$ use $\lfloor\log_p k\rfloor\le(k-1)/2$ and $v_p(k+1)\le(k+1)/3$. The valuations tend to infinity with $k$, so the integral converges in $\mathcal R$. Thus $B_\psi-B_{X^p}=-dA$ with $A\in\mathcal R$.
>
> Since
> $$
> h_\nu'=-p^\nu\frac{(1-X)^{p^\nu-1}}{Q_\nu^2}\in p^\nu\mathcal R,
> $$
> integration by parts gives $\operatorname{Res}h_\nu(B_\psi-B_{X^p})=\operatorname{Res}(h_\nu'A)\equiv0\pmod{p^\nu}$. This proves the required lift invariance, including its integrality, without asserting that $\log f$ is integral.
>
> **2. Residue and finite trace under $Y=\psi(X)$.** The integral Laurent ring is finite free of rank $p$ over its copy in $Y$, with basis $1,X,\ldots,X^{p-1}$. To check this directly, reduce modulo $p$: the inclusion is $\mathbb F_p((Y))\hookrightarrow\mathbb F_p((X))$, $Y\mapsto X^p$, whose displayed basis is a field basis. Lift the coefficients of this basis expression, subtract and divide by $p$, and repeat. Completeness gives a convergent coefficient expression over the integral $Y$-ring. A relation among the basis elements reduces to zero coefficients modulo $p$; division by $p$ and repetition, using separatedness, proves independence. This argument also justifies finite freeness after Laurent inversion and completion, without appealing to power-series division outside its stated domain. For differentials define $\psi_*\omega$ by finite trace. Then
> $$
> \operatorname{Res}_Y(\psi_*\omega)=\operatorname{Res}_X\omega,
> \qquad\psi_*(d\log g)=d\log Ng.
> $$
> Here is a direct check of the residue assertion. For $\omega=\sum_{j=0}^{p-1}a_j(Y)X^j dX$, the elementary Lagrange interpolation trace identity for the monic polynomial $\psi(X)-Y$ gives $\operatorname{Tr}(X^j/\psi')=0$ for $j<p-1$ and $1$ for $j=p-1$. Hence $\psi_*\omega=a_{p-1}(Y)dY$. On the other hand expand $a_j$ in Laurent monomials and write $\psi=X^p+pR$, $\deg R\le p-1$. For $\psi^rX^j dX$, $r\ge0$ has zero residue. If $r<0$, expand $(X^p+pR)^r$; the largest exponent of the term containing $R^l$ is $pr+j-l$. It is less than $-1$ except when $r=-1,j=p-1,l=0$, whose residue is $1$. This proves exactly the same residue formula, and convergence extends it to the stated ring. The logarithmic derivative identity follows by differentiating the finite product defining $N$.
>
> Since $h_\nu(X)=h_{\nu-1}(\psi(X))$, the residue identity is also valid after multiplication by these weights. Furthermore finite trace commutes with the $p$-adically convergent logarithm, giving
> $$
> \operatorname{Tr}_{\psi}L_\psi(g)=\log\frac{Ng}{g}=pH_g.
> $$
> Indeed the norm of $g(X)^p/g(\psi(X))$ is $(Ng)^p/g^p$.
>
> Apply these identities to the lift-$\psi$ Brückner expression. With $F=\log f$, one obtains the exact identity
> $$
> \begin{aligned}
> \operatorname{Res}h_\nu B_\psi(f,g)
> &=T_\nu(F\,d\log g)-\frac1pT_{\nu-1}\bigl(F\,d\log Ng+pH_g\,dF\bigr)\\
> &=\left(T_\nu-\frac1pT_{\nu-1}\right)(F\,d\log g)-T_{\nu-1}\bigl(d(FH_g)\bigr).
> \end{aligned}
> $$
> All transfers involving the analytic $F$ are justified by its logarithm series: after each coefficient truncation the finite trace identity applies. Here is a quantitative convergence bound. For $q=p^j>1$, the coefficient of $X^{-n}$ in $Q_j^{-1}$ has valuation at least $\max(0,\lceil(n-q)/(q-1)\rceil)$, since the term with $l$ factors of $R_j$ has valuation at least $l$ and no exponent below $-q-l(q-1)$. The coefficients of $F=\log f$ have valuation at least $-\lfloor\log_p n\rfloor$ in degree $n$, while multiplying by an integral analytic series or a logarithmic derivative with at most a simple pole changes this bound by only a fixed index shift. The linear lower bound from the weight therefore dominates every logarithmic denominator, so the residue tails converge uniformly $p$-adically. For $j=0$, the negative part of $h_0$ is finite and no tail occurs. These bounds justify the indicated limits and finite-trace interchanges.
>
> **3. Deep units kill the final derivative term.** For formula (1), choose $f=1+X^D A(X)$, where $D=2p^{\nu-1}$ and $A\in\mathbb Z_p[[X]]$, representing $a$. Choose $g=X^r u(X)$, $u\in\mathbb Z_p[[X]]^*$, representing $b$. Put $m=\nu-1$, $q=p^m$. We prove
> $$
> T_m(d(FH))\equiv0\pmod{p^{m+1}}\qquad(H\in\mathbb Z_p[[X]]).
> $$
> If $m=0$, $h_0'=-X^{-2}$ and $FH$ has order at least two, so integration by parts makes the residue exactly zero. If $m\ge1$, write $Q_m=X^q+pR_m$, where $\deg R_m\le q-1$ and $R_m(0)=0$. Expand
> $$
> F=\sum_{k\ge1}\frac{(-1)^{k+1}}kX^{kD}A^k,
> \qquad
> Q_m^{-2}=\sum_{l\ge0}(-1)^l(l+1)p^lR_m^lX^{-q(l+2)}.
> $$
> Integration by parts gives $T_m(d(FH))=-\operatorname{Res}(h_m'FH)$. A residue contribution from the pair $(k,l)$ requires
> $$
> kD-2q-l(q-1)\le-1.
> $$
> Since $D\ge2q$, this forces $l\ge2k-1$. Its scalar valuation is consequently at least
> $$
> m+l-v_p(k)\ge m+1.
> $$
> All remaining factors are integral. The same bound tends to infinity with $k,l$ where necessary, so the residue sum converges and is divisible by $p^{m+1}=p^\nu$. Taking $H=H_g$ removes the last term in Step 2.
>
> **4. The remaining residue is precisely the primitive cyclotomic trace.** Partial fractions of $Q_j^{-1}$ have simple roots $X=1-\xi$ for $\xi^{p^j}=1$, with residues $\xi/p^j$. Therefore for every analytic differential $J(X)dX$ occurring here,
> $$
> \left(T_\nu-\frac1pT_{\nu-1}\right)(J(X)dX)
> =\frac1{p^\nu}\sum_{\xi\text{ primitive }p^\nu}\xi J(1-\xi).
> $$
> The lower-order roots cancel exactly. The $-1/2$ terms have zero residue for these $J$. In formula (1), $J=F g'/g$ is analytic also at zero because $F$ has order at least two and $g'/g$ has at worst a simple pole. Thus Steps 1–3 and this identity give
> $$
> \omega(a,b)\equiv\frac1{p^\nu}S\bigl(\zeta\log a\,D\log b\bigr)\pmod{p^\nu},
> $$
> which proves (1). Its integrality and independence of the integral Laurent representation follow as well, since its residue is congruent to the integral Brückner exponent.
>
> For supplementary formula **(3)**, let $a\in U^{(1)}$ and choose $f\in1+X\mathbb Z_p[[X]]$. Take $g=X$. Since $NX=X$, one has $H_g=0$ **exactly**. Thus Step 2 already gives the primitive trace, with no deep-unit assumption and no estimate from Step 3:
> $$
> \omega(a,\pi)\equiv\left(T_\nu-\frac1pT_{\nu-1}\right)\left(F\frac{dX}X\right)
> =\frac1{p^\nu}S\left(\frac\zeta\pi\log a\right)\pmod{p^\nu}.
> $$
> Here $F/X$ is analytic at zero. Its value $F'(0)$ contributes equally as $F'(0)/p^\nu$ to the two $T$ terms and cancels, so there is no omitted zero-root term. This proves (3) for every $\nu$.
>
> For supplementary formula **(2)**, take $f=1-X$, representing $\zeta$, and let $g\in1+X\mathbb Z_p[[X]]$ represent $a$. Since $f(\psi(X))=f(X)^p$, $L_\psi(f)=0$ and $p^{-1}d\log f(\psi)=d\log f=-dX/(1-X)$. Hence
> $$
> B_\psi(f,g)=L_\psi(g)\frac{dX}{1-X}.
> $$
> Write $G=\log g$. Since $\psi^*(dY/(1-Y))=p\,dX/(1-X)$ and trace of a pullback multiplies by $p$, its residue is
> $$
> \operatorname{Res}h_\nu B_\psi(f,g)
> =\left(T_\nu-\frac1pT_{\nu-1}\right)\left(G\frac{dX}{1-X}\right)
> =\frac1{p^\nu}S(\log a).
> $$
> The primitive-root factor $\xi$ cancels $1/(1-(1-\xi))=1/\xi$. Lift invariance proves (2) with the required sign. All three identities have now been deduced from (3.7); no instance of the desired Iwasawa–Artin–Hasse formulas was used as an external input.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §3, Exercise 2, printed p. 340, PDF p. 359]. Original page inspected at 200 dpi. Exact exercise and referenced statements checked at printed pp.339–340 / PDF pp.358–359. The original source refers the proof of Brückner to external references rather than proving it. The complete general deduction above uses a proved Frobenius-lift homotopy, finite trace of Laurent differentials, and the independently established norm operator for the multiplicative formal group. The norm-operator construction itself does not use the desired reciprocity formulas. The printed phrase “integral power series” for arbitrary $b\in\Phi_\nu^*$ is interpreted as an integral Laurent representative $X^r u(X)$ when $b$ has negative valuation; the logarithmic derivative of such a representative is what enters the formula.
